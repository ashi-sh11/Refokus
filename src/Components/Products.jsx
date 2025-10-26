import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

function Products() {
  const data = [
    {
      title: "arqitel",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolorum cumque la porro dicta corrupti repellat tempore modi animi voluptatem expedita aliquid magni architecto recusandae tempora, eveniet temporibus qui ducimus neque? Numquam eum rerum maxime facilis",
      live: true,
      case: false,
    },
    {
      title: "ttr",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolorum cumqu fuga porro dicta corrupti repellat tempore modi animi voluptatem expedita aliquid magni architecto recusandae tempora, eveniet temporibus qui ducimus neque? Numquam eum rerum maxime facilis",
      live: true,
      case: false,
    },
    {
      title: "ytr 2025",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolorum cum voluptatem expedita aliquid magni architecto recusandae tempora, eveniet temporibus qui ducimus neque? Numquam eum rerum maxime facilis",
      live: true,
      case: true,
    },
    {
      title: "yahooo!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolorum cumque laborum pariatur blanditiis natus. Praesentium voluptatem expedita aliquid magni architecto recusandae tempora, eveniet temporibus qui ducimus neque? Numquam eum rerum maxime facilis",
      live: true,
      case: true,
    },
    {
      title: "shopzeee",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolorum cumque laborum pariatur blanditiis natus. Praesentium i animi voluptatem expedita aliquid magni architecto recusandae tempora, eveniet temporibus qui ducimus neque? Numquam eum rerum maxime facilis",
      live: true,
      case: true,
    },
  ];
  const [pos, setPos] = useState(36);
  const mover = (val) => {
    setPos(val * 18);
  };
  return (
    <div className="mt-20 relative">
      {data.map((ele, idx) => (
        <Product key={idx} val={ele} mover={mover} count={idx} />
      ))}
      <div className="w-full h-full absolute pointer-events-none top-0">
        <motion.div
          initial={{ y: 0, x: "-50%" }}
          animate={{ y: pos + "rem" }}
          className="window w-[28rem] h-[18rem] absolute left-[46%] overflow-hidden"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ y: -pos + "rem", opacity: pos === 0 ? 1 : 0 }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full  "
          >
            <video
              className="h-full w-full bg-cover bg-center"
              muted
              autoPlay
              src="/src/assets/video1.webm"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full  "
          >
            <video
              className="h-full w-full"
              muted
              autoPlay
              src="/src/assets/video2.webm"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full  "
          >
            <video
              className="h-full w-full"
              muted
              autoPlay
              src="/src/assets/video3.webm"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full  "
          >
            <video
              className="h-full w-full"
              muted
              autoPlay
              src="/src/assets/video4.webm"
            ></video>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ y: -pos + "rem", opacity: pos === 72 ? 1 : 0 }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full  "
          >
            <video
              className="h-full w-full"
              muted
              autoPlay
              src="/src/assets/video5.webm"
            ></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
