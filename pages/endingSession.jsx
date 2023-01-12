import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";

export default function endingSession() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen px-10">
        <Image src="/image/logo.png" width={200} height={200} alt="Logo" />
        <h2 className="text-2xl text-center mt-20">
          Votre participation a bien été enregistrée
        </h2>
      </div>
    </>
  );
}
