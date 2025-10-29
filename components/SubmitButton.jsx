"use client";
import React, { useEffect } from "react";
import SubmitForm from "./SubmitForm";
import { useModal } from "@/context/ModalContext"; // ⬅️ import

const SubmitButton = () => {
  const { isModalOpen, openModal, closeModal } = useModal();

  // prevent background scroll
  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
  }, [isModalOpen]);

  return (
    <div>
      <button
        onClick={openModal}
        className="flex items-center gap-2 md:px-5 md:py-2.5 px-3 py-2 rounded-xl bg-black text-white border border-zinc-800 hover:bg-zinc-900 hover:border-zinc-700 transition-all duration-300 active:scale-95"
      >
        <i className="ri-add-line text-lg"></i>
        Submit Resource
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="bg-[#0D0D0D] p-6 rounded-2xl w-full max-w-md shadow-lg relative">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              <i className="ri-close-line text-2xl"></i>
            </button>
            <SubmitForm onClose={closeModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default SubmitButton;
