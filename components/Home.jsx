import React from "react";
import Navbarr from "./Navbarr";

const Home = () => {
  return (
    <div className=" md:h-[60vh] lg:h-[85vh] sm:h-[80vh] h-[90vh] w-full bg-black bg-[radial-gradient(ellipse_at_80%_0%,#1d4e33_0%,#000_40%,transparent_70%),radial-gradient(ellipse_at_10%_20%,#174e5e_0%,#000_50%,transparent_70%),radial-gradient(ellipse_at_50%_50%,#173d4e_0%,#000_60%,transparent_80%)] text-white">
      <Navbarr />

      <div className=" w-full flex items-center justify-center h-full">
        <div className="flex items-center justify-between flex-col w-full px-6 md:my-20">
          <h1 className="sm:text-5xl md:text-5xl lg:text-6xl   max-w-[25ch] text-4xl text-center font-bold flex items-center">
            Handpicked and curated resources for frontend developers and
            designers.
          </h1>
          <h1 className="md:text-2xl text-lg text-center py-6  flex items-center text-[#7E7E7E] max-w-[50ch]">
            Discover the ultimate collection of assorted tools, colors, icons,
            and libraries — thoughtfully crafted to inspire your next project.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
