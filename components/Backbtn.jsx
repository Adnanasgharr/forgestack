"use client";
import { useRouter } from "next/navigation";

export default function Backbtn() {
  const router = useRouter();
  return (
    <div>
      <button className="flex items-center justify-center" onClick={() => router.back()}>
        <i className="ri-arrow-left-s-line text-3xl text-zinc-800"></i>
        <p className="inline-block">Back</p>
      </button>
    </div>
  );
}
