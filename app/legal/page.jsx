import React from "react";
import Navbarr from "@/components/Navbarr";

const page = () => {
  return (
    <div>
      <Navbarr />
    

 <div className="md:grid md:grid-cols-[1fr_2fr] flex  justify-between flex-col md:p-14 p-4">
        <div>
          <h1 className="md:text-6xl text-5xl font-bold pt-8">Legal info</h1>
        </div>
        <div className="md:text-3xl text-2xl flex flex-col  gap-8 items-center justify-between text-[#7E7E7E] md:pr-40 py-8">
          <p>
                This website uses Google Analytics to analyze traffic and improve
            overall performance and user experience. No personal information is
            collected or stored.
          </p>

          <p>
         All trademarks, logos, brand names, and company names mentioned on
            this site are the property of their respective owners. Use of these
            names does not imply endorsement.
          </p>
          <p>       All resources and materials are provided for educational and
          informational purposes only.</p>
        </div>
      </div>
    </div>
  );
};

export default page;

