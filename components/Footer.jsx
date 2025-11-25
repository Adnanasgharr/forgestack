"use client";
import React from "react";
import { useModal } from "@/context/ModalContext";

const Footer = () => {
  const { openModal } = useModal();

  return (
    <>
      {/* Fixed "Made by" badge */}
      <div className="fixed md:bottom-10 md:left-42 left-28 bottom-8 -translate-x-1/2 z-50">
        <div className="md:text-sm text-[10px] text-neutral-400 border border-neutral-700 bg-black/80 backdrop-blur-md rounded-full px-5 py-2 shadow-lg w-full">
          Made & curated by{" "}
          {/* <span className="text-white font-medium">Adnan Asghar</span> */}
          <a
            href="https://adnanasghar.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-medium"
          >
            Adnan Asghar
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <footer className="px-4 py-4 sm:py-4 md:pb-10 md:px-10 border-t border-neutral-800 bg-black text-gray-400 pb-10">
        <h1 className="text-[#30312F] font-bold tracking-tighter leading-none text-[20vw] sm:text-[20vw] md:text-[20vw]  text-center ">
          forgestack
        </h1>

        <div className="sm:grid sm:grid-cols-[1fr_1.5fr] items-center justify-between gap-6 py-4 mb-8 sm:m-0 sm:p-0">
          <div className="bg-amber-300"></div>

          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3    justify-center gap-3 text-sm text-[#CCCCCC] ">
            <a href="/about" className="hover:text-white transition-colors">
              About
            </a>
            <button
              onClick={openModal}
              className="hover:text-white transition-colors w-fit  h-fit"
            >
              Add Resources
            </button>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScq4Rf9C2tKAdU8aKTJ4_RhP6IcIWMm0_7eFlNPUUK8WYgWYA/viewform"
              className="hover:text-white transition-colors"
            >
              Submit Feedback
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Contribute on GitHub
            </a>

            <a href="/legal" className="hover:text-white transition-colors">
              Legal
            </a>
          </div>
        </div>

        {/* <div className="text-center text-xs text-neutral-600 mt-10">
          © {new Date().getFullYear()} Forgestack. All rights reserved.
        </div> */}
      </footer>
    </>
  );
};

export default Footer;
