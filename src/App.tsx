import logo from "./images/Proteous.png";
import Table from "./components/Table";

function App() {
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

        {/* <div className="w-full h-screen border border-black h-max rounded-lg">
          <iframe
            src="https://www.litemol.org/Viewer/"
            title="UniProt structure"
            className="w-full h-full"
          />
        </div> */}
      </div>

      <div id="footer" className="flex items-center justify-center">
        <img src={logo} className="max-h-24" alt="logo" />
      </div>
    </div>
  );
}
export default App;
