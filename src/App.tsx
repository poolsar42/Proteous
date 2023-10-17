import logo from "./images/Proteous.png";
import Table from "./components/Table";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [entries, setEntries] = useState([]);
  const [id, setId] = useState(0);
  const [prediction, setPrediction] = useState([]);
  const [substring, setSubstring] = useState("");
  const [tm, setTm] = useState("");

  useEffect(() => {
    axios
      .get("https://proteous-606b94fbd95c.herokuapp.com/all-entries")
      .then((response) => {
        //http://localhost:8000/all-entries
        setEntries(JSON.parse(response.data));
      });
  }, []);

  return (
    <div className="flex items-center justify-center flex-col w-screen h-screen">
      <p>Proteous</p>
      <div
        className="flex flex-col items-center mt-5 border border-black rounded-lg text-center
      w-[75%] h-[85%] min-h-fit"
      >
        <div className="flex flex-row justify-between w-full px-5">
          <div className="flex flex-col items-start space-y-4">
            <div>
              <div className="flex flex-col items-start">
                <p>Project</p>
                <input className="border border-black rounded-lg text-center" />
              </div>
            </div>
            <div className="flex flex-col items-start">
              <p>Database Entries</p>
              <Table
                metric={false}
                entries={entries?.map((entry, id) => ({
                  sequence: entry.protein_sequence.slice(0, 18),
                  id,
                }))}
                onClick={async (id) => {
                  const predictions = await axios.post(
                    "https://proteous-606b94fbd95c.herokuapp.com/get_best_variants",
                    //"http://localhost:8000/get_best_variants",
                    {
                      sequence: entries[id].protein_sequence,
                    }
                  );
                  setPrediction(predictions.data.sequences);
                }}
              />
            </div>
            {prediction.length ? (
              <div className="flex flex-col items-start">
                <p>Best Variants</p>
                <Table
                  metric={false}
                  entries={prediction?.map((entry, id) => ({
                    sequence: entry.slice(0, 18),
                    id,
                  }))}
                  onClick={async (id) => {
                    const predictions = await axios.post(
                      "https://proteous-606b94fbd95c.herokuapp.com/predict",
                      //"http://localhost:8000/predict"
                      {
                        sequence: prediction[id],
                      }
                    );
                    setTm(predictions.data.tm);
                  }}
                />
                {tm && (
                  <div className="flex flex-col items-start">
                    <p>Predicted TM</p>
                    <div
                      className="border border-black my-2 p-4 h-12 w-max
               rounded-lg truncate flex "
                    >
                      {tm}
                    </div>
                  </div>
                )}
              </div>
            ) : null}
          </div>
          <div>
            <div className="flex flex-col items-start h-[15%]">
              <p>Objective</p>
              <input className="border border-black rounded-lg text-center" />
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
