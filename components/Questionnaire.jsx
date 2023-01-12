import React from 'react'
import Image from 'next/image'
import { MdOutlineDownload } from 'react-icons/md'

export default function Questionnaire() {
  return (
    <div className='w-full border-solid border-2 border-red-600'>
      
      <div className='w-2/5 text-center border-solid border-2 border-blue-600 mx-4'>
          <Image src="/image/questionnaire.png" width={250} height={250} alt="Questionnaire" className='shadow-md rounded-xl'/>
          <h1 className="font-bold">Basket-fauteuil</h1>
          <p>11/01/2023</p>
          <button type="submit" className="flex p-2 font-semibold bg-cyan-500 text-white">
            <MdOutlineDownload/>
            <p>Esport csv</p>
          </button>
      </div>
      
    </div>
  )
}
