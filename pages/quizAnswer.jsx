//quizAnswer.jsx

import React from "react";
import Navbar from "../components/Navbar";

export default function quizAnswer() {
  return (
    <>
      <Navbar />

      <div
        className="flex flex-col
      items-center min-h-screen"
      >
        <h1 className="font-bold text-4xl py-20">Thème</h1>

        <h2 className="font-bold text-2xl pb-20">Affirmation</h2>

        <div className="text-center font-bold min-w-full text-3xl">
          <div className="py-6 bg-lime-600 text-white">
            <p>Tout à fait daccord</p>
          </div>
          <div className="py-6 bg-lime-400 text-white">
            <p className="">Plutôt daccord</p>
          </div>
          <div className="py-6 bg-orange-400 text-white">
            <p>Mitigé</p>
          </div>
          <div className="py-6 bg-red-400 text-white">
            <p>Plutot pas daccord</p>
          </div>
          <div className="py-6 bg-red-500 text-white">
            <p>Pas du tout daccord</p>
          </div>
          <div className="py-6 bg-white">
            <p>Ne sait pas</p>
          </div>
          <div className="py-6 bg-black text-white">
            <p>Ne souhaite pas mexprimer</p>
          </div>
        </div>
      </div>
    </>
  );
}
