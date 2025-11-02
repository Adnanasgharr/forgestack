import React from "react";
import SubmitButton from "./SubmitButton";
import Link from "next/link";

const Navbarr = () => {
  return (
    <div className="flex items-center justify-between w-full md:px-14 md:py-6 p-4">
      <Link className="text-xl md:text-2xl inline-flex items-center gap-2" href="/">
       <img src="/logo.png" className="md:w-6 w-8 " alt="" /> 
       <span className="hidden md:block sm:block">forgestack</span>
      </Link>
      <div className="flex items-center justify-between gap-2 md:gap-6">
        <Link href="/about" className="hover:text-emerald-400 transition-all hidden md:block">
          About
        </Link>

        <SubmitButton />
      </div>
    </div>
  );
};

export default Navbarr;
