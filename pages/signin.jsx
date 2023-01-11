import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'

const signin = () => {
  return (
    <div>
      <Head>
        <title>Se connecter</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='text-center'>
        <figure>
          <Image src="/image/logo.png" width={250} height={250} alt="Logo" className="mx-auto"/>
        </figure>
        <h1 className='font-bold text-3xl mb-12'>Se connecter</h1>

        <form className='inline-grid w-9/12'>
          <input type="text" placeholder='Adresse email' className='mb-8 border-b-2 w-full'></input>
          <input type="text" placeholder='Mot de passe' className='mb-12 border-b-2 w-full'></input>
          <button type="submit" className="bg-cyan-500 p-3 rounded-full text-white font-bold mb-2">Se connecter</button>
          <p className='text-sm ml-2 hover:text-cyan-500 cursor-pointer mb-12'>Mot de passe oublié ?</p>


          <button type="submit" className="border-solid border-2 border-cyan-500 text-cyan-500 p-3 rounded-full  font-bold">Connexion avec Google</button>

          <div className="my-4 border-b border-black text-center">
              <div
                className="leading-none px-2 inline-block text-sm text-black tracking-wide font-medium bg-white transform translate-y-1/2"
              >
                Or sign up
              </div>
          </div>


          
            <button type="submit" className="border-solid border-2 border-black mb-4 p-3 rounded-full  font-bold"><Link href="/signup">S'inscrire</Link></button>
          
        </form>

      </main>
    </div>
  );
};

export default signin;