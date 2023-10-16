import logo from "./images/Proteous.png";
import Table from "./components/Table";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [entries, setEntries] = useState([]);
  const [substring, setSubstring] = useState("");

  useEffect(() => {
    // Get all entries
    axios
      .get("https://proteous-606b94fbd95c.herokuapp.com/all-entries")
      .then((response) => {
        setEntries(response.data);
      });
  }, []);

  console.log({ entries });

  //   const handleSubstringSearch = () => {
  //     // Get entries by substring
  //     axios
  //       .get(`http://localhost:5000/substring-search?substring=${substring}`)
  //       .then((response) => {
  //         setEntries(response.data);
  //       });
  //   };

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
              <Table />
            </div>
            <div className="flex flex-col items-start">
              <p>Scored Variants</p>
              <Table />
            </div>
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
