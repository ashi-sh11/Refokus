import React from "react";

function Stripe({ val, v }) {
  return (
    <div className="w-[16.66%] px-3 py-1  border-t-[1px] border-b-[1px] border-r-[2px] border-zinc-900 flex items-center justify-between bg-white text-black">
      <img className="w-40 h-10 " src={val.url} alt="" />
      <span className=" text-2xl">{val.num}</span>
    </div>
  );
}

export default Stripe;
