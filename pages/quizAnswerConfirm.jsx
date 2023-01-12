import React from "react";
import Navbar from "../components/Navbar";
import { FaCircle } from "react-icons/fa";

export default function quizAnswerConfirm() {
  return (
    <>
      <Navbar />

      <div
        className="flex flex-col
      items-center min-h-screen"
      >
        <h1 className="font-bold text-4xl py-20">Thème</h1>
        <h2 className="font-bold text-2xl pb-20">Affirmation</h2>
        <div className="flex text-center mb-20">
          <p className="text-1xl px-2">
            Vous êtes tout à fait daccord avec cette affirmation
          </p>
          <FaCircle className="text-lime-500"></FaCircle>
        </div>
        <button className="bg-cyan-500 py-5 px-10 rounded-full text-white font-bold text-1xl">
          Changer mon vote
        </button>
      </div>
    </>
  );
}
