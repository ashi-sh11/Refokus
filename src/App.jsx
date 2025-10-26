import React from "react";
import Navbar from "./Components/Navbar";
import Work from "./Components/Work";
import Stripes from "./Components/Stripes";
import Products from "./Components/Products";
import Maruees from "./Components/Maruees";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import HighEndAwards from "./Components/HighEndAwards";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="h-full w-full bg-zinc-900 text-white ">
      <Navbar />
      <Work />
      <Stripes />
      <Products />
      <Maruees />
      {/* <HighEndAwards /> */}
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
