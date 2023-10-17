import logo from "./images/Proteous.png";
import Table from "./components/Table";
import { useEffect, useState } from "react";
import axios from "axios";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import toast, { Toaster } from "react-hot-toast";

import img0 from "./protein_images/0.gif";
import img1 from "./protein_images/1.gif";
import img2 from "./protein_images/2.gif";
import img3 from "./protein_images/3.gif";
import img4 from "./protein_images/4.gif";
import img5 from "./protein_images/5.gif";
import img6 from "./protein_images/6.gif";
import img7 from "./protein_images/7.gif";
import img8 from "./protein_images/8.gif";
import img9 from "./protein_images/9.gif";
import img10 from "./protein_images/10.gif";

const options = [
  "Increase protein Tm",
  "Optimize protein expression",
  "Increase custom protein activity",
];
const defaultOption = options[0];

const proteinImages = {
  0: img0,
  1: img1,
  2: img2,
  3: img3,
  4: img4,
  5: img5,
  6: img6,
  7: img7,
  8: img8,
  9: img9,
  10: img10,
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function App() {
  const [entries, setEntries] = useState([]);
  const [prediction, setPrediction] = useState({ sequences: [], tms: [] });
  const [substring, setSubstring] = useState("");

  const notify = () => toast("Copied");

  useEffect(() => {
    axios
      .get("https://proteous-606b94fbd95c.herokuapp.com/all-entries")
      // .get("http://localhost:8000/all-entries")
      .then((response) => {
        setEntries(JSON.parse(response.data));
      });
  }, []);

  return (
    <div className="flex items-center justify-center flex-col w-screen min-h-screen my-5">
      <Toaster />
      <div
        className="flex flex-col items-center mt-5 border border-gray-300 text-center
      w-[75%] min-h-fit min-h-fit"
      >
        <div className="flex flex-row justify-between w-full px-5 space-x-4 py-4">
          <div className="w-full flex flex-col items-start space-y-4">
            <div className="w-full flex flex-col items-start">
              <p>Project</p>
              <input
                className="border border-gray-300 px-2 w-full h-[43px]"
                placeholder="Define the name of the project"
              />
            </div>
            <div className="w-full flex flex-col items-start">
              <p>Upload your own file</p>
              <input type="file" />
            </div>
            <div className="w-full flex flex-col items-start">
              <p>Database Entries</p>
              <Table
                metric={false}
                entries={entries?.map((entry, id) => ({
                  sequence: entry.protein_sequence.slice(0, 30),
                  id,
                }))}
                onClick={async (id) => {
                  const predictions = await axios.post(
                    "https://proteous-606b94fbd95c.herokuapp.com/get_best_variants",
                    // "http://localhost:8000/get_best_variants",
                    {
                      sequence: entries[id].protein_sequence,
                    }
                  );
                  setPrediction(predictions.data);
                }}
              />
            </div>
            {prediction.sequences.length ? (
              <div className="w-full flex flex-col items-start">
                <p>Best Variants</p>
                <Table
                  metric={true}
                  entries={prediction?.sequences.map((entry, id) => ({
                    sequence: entry.slice(0, 30),
                    id,
                    metric: prediction.tms[id],
                  }))}
                  onClick={(id) => {
                    navigator.clipboard.writeText(prediction.sequences[id]);
                    notify();
                  }}
                />
              </div>
            ) : null}
          </div>
          <div className="w-full flex flex-col space-y-4">
            <div className="w-full flex flex-col items-start h-[15%]">
              <p>Objective</p>
              <Dropdown
                className="w-full border-gray-300 rounded-lg"
                options={options}
                placeholder="Select an option"
              />
            </div>
            <div className="border border-gray-300 rounded-lg w-full h-full">
              <img
                src={proteinImages[getRandomInt(11)]}
                alt="3d protein"
                className="w-full"
              ></img>
            </div>
          </div>
        </div>
      </div>

      <div id="footer" className="flex items-center justify-center">
        <img src={logo} className="max-h-24" alt="logo" />
      </div>
    </div>
  );
}
export default App;
