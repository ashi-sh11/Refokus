import React from "react";
import Button from "./Button";

function Navbar() {
  return (
    <div className="max-w-screen-xl mx-auto p-3 flex items-center justify-between border-b-[1px] border-zinc-700">
      <div className="left flex items-center">
        <img
          className="image-white"
          src="https://cdn.prod.website-files.com/60d4936dc6a4eb2166d0f114/6136881a5fa4d5683ddf9dd1_Tools.svg"
          alt=""
        />

        <div className="flex items-center gap-14 ml-20">
          {["Home", "Work", "Culture", "", "News"].map((ele, idx) =>
            ele.length === 0 ? (
              <span key={idx} className="w-[2px] h-7 bg-zinc-700"></span>
            ) : (
              // normal links
              <a key={idx} href="#" className="flex items-center gap-1">
                {idx === 1 && (
                  <span
                    style={{ boxShadow: "0 0 0.45rem #00FF19" }}
                    className="inline-block w-1 h-1 rounded-full bg-[#00FF19]"
                  ></span>
                )}
                {ele}
              </a>
            )
          )}
        </div>
      </div>
      <Button />
    </div>
  );
}

export default Navbar;
