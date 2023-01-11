import Head from 'next/head'
import Image from 'next/image'
// import clientPromise from '../lib/mongodb'
import { useEffect, useState } from 'react'

export default function Home() {


  return (
    <div>
      <Head>
        <title>Accueil</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-center">
        <figure>
          <Image src="/image/logo.png" width={250} height={250} alt="Logo" className="mx-auto" />
        </figure>
        <h1 className="font-bold text-3xl mb-12">Code pin</h1>

        <form className='inline-grid w-9/12'>
          <input type="text" placeholder='Code de la session' className='mb-8 border-b-2 w-full'></input>
          <input type="text" placeholder='Prénom'  className='mb-12 border-b-2 w-full'></input>
          <button type="submit" className="bg-cyan-500 p-3 rounded-full text-white font-bold">Rejoindre la session</button>
        </form>

      </main>
    </div>
  )
}
