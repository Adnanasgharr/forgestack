import React from "react";
import Navbarr from "./Navbarr";

const Home = () => {
  return (
    <div className=" md:h-[60vh] lg:h-[85vh] sm:h-[80vh] h-[90vh] w-full bg-[#000000]
    
       bg-[radial-gradient(circle_at_15%_10%,#144B3E_0%,transparent_18%),radial-gradient(circle_at_85%_12%,#102B25_0%,transparent_18%),radial-gradient(circle_at_50%_5%,#144d3b_0%,transparent_20%),radial-gradient(circle_at_70%_0%,#0a3c32_0%,transparent_18%)]
bg-no-repeat 
bg-[length:300%_300%] md:bg-[length:200%_200%] lg:bg-[length:150%_150%]

  
    
        text-white">
      <Navbarr />

      <div className=" w-full flex items-center justify-center h-full">
        <div className="flex items-center justify-between flex-col w-full px-6 md:my-20">
          <h1 className="sm:text-5xl md:text-5xl lg:text-6xl max-w-[25ch] text-4xl text-center  flex items-center">
            Handpicked and curated resources for frontend developers and
            designers.
          </h1>
          <h1 className="md:text-xl text-lg text-center py-6  flex items-center text-[#7E7E7E] max-w-[60ch]">
            Discover the ultimate collection of assorted tools, colors, icons, libraries, and beyond — thoughtfully crafted to inspire your next project.
          </h1>
        </div>
      </div>
    </div>  
  );
};

export default Home;
