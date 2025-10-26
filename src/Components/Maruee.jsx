import React from "react";
import { motion } from "framer-motion";

function Maruee({ imagesurls, direction = "left" }) {
  return (
    <div className="flex w-full overflow-hidden py-4">
      <motion.div
        initial={{ x: direction === "left" ? 0 : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : 0 }}
        transition={{ ease: "linear", repeat: Infinity, duration: 25 }}
        className="flex gap-8 flex-shrink-0"
      >
        {imagesurls.map((url, index) => (
          <img
            className="h-12 w-auto object-contain"
            key={index}
            src={url}
            alt={`Logo ${index + 1}`}
          />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? 0 : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : 0 }}
        transition={{ ease: "linear", repeat: Infinity, duration: 25 }}
        className="flex gap-8 flex-shrink-0"
      >
        {imagesurls.map((url, index) => (
          <img
            className="h-12 w-auto object-contain"
            key={`duplicate-${index}`}
            src={url}
            alt={`Logo ${index + 1}`}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default Maruee;
