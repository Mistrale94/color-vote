//sessionTracking.jsx

import React from "react";
import Navbar from "../components/Navbar";

export default function sessionTracking() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col justify-evenly items-center">
        <h1 className="font-bold text-6xl">Thème</h1>
        <h2 className="text-6xl font-light">Affirmation</h2>
        <p className="text-6xl font-light text-gray-500">9 / 15</p>
        <div className="flex flex-col">
          <button className="py-5 px-10 rounded-full border-solid border-2 mb-10 border-cyan-500 text-cyan-500 text-1xl">
            Question suivante
          </button>
          <button className="bg-cyan-500 py-5 px-10 rounded-full text-white font-bold text-1xl">
            Terminer la session
          </button>
        </div>
      </div>
    </>
  );
}
