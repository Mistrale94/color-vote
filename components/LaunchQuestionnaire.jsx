import React from 'react'
import Image from 'next/image'
import { MdOutlineDownload } from 'react-icons/md'

export default function Questionnaire() {
  return (      
      <div className='relative inline-grid text-center mb-9'>
        <figure>
          <Image src="/image/questionnaire.png" width={250} height={250} alt="Questionnaire" className='w-full rounded-xl drop-shadow-xl'/>
        </figure>
        <div className='absolute flex flex-col items-center top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4'>
          <h1 className="font-bold text-white mb-2 tracking-wide">Basket-fauteuil</h1>
          <p className='text-white mb-2 font-light
          '>13/01/2023</p>
          <button type="submit" className="flex p-2 font-semibold bg-green-500 text-white">
            <p>Commencer</p>
          </button>
        </div>
      </div>
  )
}
