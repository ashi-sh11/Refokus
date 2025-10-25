import React from "react";
import Card from "./Card";

function Cards() {
  return (
    <div>
      <div className="w-full max-w-screen-xl mx-auto py-32 flex gap-2">
        <Card width={"basis-1/3"} start={false} para={true} />
        <Card width={"basis-2/3"} start={true} para={false} />
      </div>
    </div>
  );
}

export default Cards;
