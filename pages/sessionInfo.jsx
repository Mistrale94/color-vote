//sessionInfo.jsx

import React from "react";
import Navbar from "../components/Navbar";
import { AiOutlineCheck } from "react-icons/ai";

export default function sessionInfo() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-zinc-700 text-white flex flex-col pt-20">
        <div className="border-b-2 border-b-white py-3 px-3 mx-20 justify-between flex">
          <p className="text-3xl">Jean</p>
          <AiOutlineCheck className="text-cyan-500 font-bold text-3xl"></AiOutlineCheck>
        </div>

        <div className="border-b-2 border-b-white py-3 px-3 mx-20 flex justify-between">
          <p className="text-3xl">Paul</p>
          <AiOutlineCheck className="text-cyan-500 font-bold text-3xl"></AiOutlineCheck>
        </div>

        <div className="border-b-2 border-b-white py-3 px-3 mx-20 flex justify-between">
          <p className="text-3xl">Gauthier</p>
          <AiOutlineCheck className="text-cyan-500 font-bold text-3xl"></AiOutlineCheck>
        </div>

        <div className="border-b-2 border-b-white py-3 px-3 mx-20 flex justify-between">
          <p className="text-3xl">Gégé</p>
          <AiOutlineCheck className="text-cyan-500 font-bold text-3xl"></AiOutlineCheck>
        </div>
      </div>
    </>
  );
}
