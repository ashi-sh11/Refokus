import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
function Card({ width, start, para }) {
  return (
    <div
      className={`bg-zinc-800 ${width} rounded-xl p-4 min-h-[27rem] flex flex-col justify-between hover:bg-violet-600 hover:scale-[1.05] duration-500 `}
    >
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3>heading one</h3>
          <IoIosArrowRoundForward />
        </div>
        <div>
          <h1 className="text-3xl font-medium mt-5">Whatever heading</h1>
        </div>
      </div>
      <div className="down w-full">
        {start === true && (
          <>
            <h1 className="text-5xl font-semibold tracking-tight leading-none">
              Start the project
            </h1>
            <button className="px-3 py-1 rounded-full mt-5 border-[1px]">
              Contact us
            </button>
          </>
        )}
        {para && (
          <>
            <p className="text-sm text-zinc-400 tracking-tight font-medium">
              Lorem ipsum, dolor m ipsam sunt recusandae quaerat repellat
              quisquam?
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default Card;
