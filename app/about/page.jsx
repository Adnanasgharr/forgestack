import React from "react";
import Navbarr from "@/components/Navbarr";

const page = () => {
  return (
    <div>
      <Navbarr />
      <div className="md:grid md:grid-cols-[1fr_2fr] flex  justify-between flex-col md:p-14 p-4">
        <div>
          <h1 className="md:text-6xl text-5xl font-bold pt-8">About forgestack</h1>
        </div>
        <div className="md:text-3xl text-2xl flex flex-col  gap-8 items-center justify-between text-[#7E7E7E] md:pr-40 py-8">
          <p>
            I started ForgeStack to address the roadblocks I hit during my early
            days in frontend development and web design. Digging through endless
            resources and tools burned through time that would have been better
            spent actually coding and designing.
          </p>

          <p>
            ForgeStack exists today to help others navigate these same obstacles.
            These resources are carefully handpicked and curated by me and other
            experienced contributors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
