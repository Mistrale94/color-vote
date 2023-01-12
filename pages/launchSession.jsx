//launchSession.jsx

import React from "react";
import Navbar from "../components/Navbar";

export default function launchSession() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col justify-evenly items-center justify-items-center content-center">
        <div className="flex flex-col items-center justify-center justify-items-center">
          <p className="text-6xl mb-20">Session : 0810</p>
          <p className="text-3xl font-light text-gray-500">9 / 15</p>
        </div>
        <button className="bg-cyan-500 py-5 px-10 rounded-full text-white font-bold text-1xl">
          Commencer la session
        </button>
      </div>
    </>
  );
}