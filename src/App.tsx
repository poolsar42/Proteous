import logo from "./images/Proteous.png";
import React, { useState, useEffect } from "react";

function App() {
  return (
    <div className="flex items-center justify-center flex-col w-screen h-screen">
      <p>Proteous</p>
      <div
        className="flex flex-col justify-center mt-5 border border-black rounded-lg text-center
      w-[75%] h-[85%] min-h-fit"
      >
        <div
          id="litemol"
          style={{
            width: "640px",
            height: "480px",
            marginTop: "200px",
            position: "relative",
          }}
        ></div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col items-start">
            <div>
              <div className="flex flex-col items-start">
                <p>Project</p>
                <input className="border border-black rounded-lg text-center" />
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-start h-[15%]">
              <p>Objective</p>
              <input className="border border-black rounded-lg text-center" />
            </div>
          </div>
        </div>
        <div className="w-full h-[85%] border border-black h-max rounded-lg">
          <iframe
            src="https://www.litemol.org/Viewer/"
            title="UniProt structure"
            className="w-full h-full"
          />
        </div>
      </div>

      <div id="footer" className="flex items-center justify-center">
        <img src={logo} className="max-h-24" alt="logo" />
      </div>
    </div>
  );
}
export default App;
