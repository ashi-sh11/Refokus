import React from "react";

function Maruee({ urls }) {
  return (
    <div className="flex w-full py-5 gap-20 h-20 bg-white whitespace-nowrap overflow-hidden">
      {urls.map((ele) => (
        <img src={ele} />
      ))}

      {urls.map((ele) => (
        <img src={ele} />
      ))}
    </div>
  );
}

export default Maruee;
