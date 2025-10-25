import React from "react";
import Product from "./Product";

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
  return (
    <div className="mt-20">
      {data.map((ele, idx) => (
        <Product key={idx} val={ele} />
      ))}
    </div>
  );
}

export default Products;
