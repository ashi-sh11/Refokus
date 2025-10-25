import React from "react";

function Work() {
  const image = [
    {
      url: "https://images.unsplash.com/photo-1510674485131-dc88d96369b4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fHRlY2h8ZW58MHx8MHx8fDA%3D",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D",
      top: "45%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1680700308566-543a60569017?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHRlY2h8ZW58MHx8MHx8fDA%3D",
      top: "60%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1626908013351-800ddd734b8a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHRlY2h8ZW58MHx8MHx8fDA%3D",
      top: "55%",
      left: "38%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHRlY2h8ZW58MHx8MHx8fDA%3D",
      top: "63%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1611264327630-8090373c8cef?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fHRlY2h8ZW58MHx8MHx8fDA%3D",
      top: "65%",
      left: "60%",
      isActive: false,
    },
  ];
  return (
    <div className="w-full mt-20 ">
      <div className="relative max-w-screen-xl mx-auto">
        <h1 className="text-center text-[30vw] leading-none tracking-tight select-none  font-medium">
          Work
        </h1>
        <div className="absolute top-0 w-full h-full">
          {image.map(
            (ele, idx) =>
              ele.isActive && (
                <img
                  className="absolute w-52 rounded-md -translate-x-[50%] -translate-y-[50%]"
                  style={{ top: ele.top, left: ele.left }}
                  src={ele.url}
                  alt=""
                />
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default Work;
