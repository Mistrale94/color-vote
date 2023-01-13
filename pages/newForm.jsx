import Head from 'next/head'
import Image from 'next/image'
import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Link from 'next/link';
// import { PlusCircleIcon } from "@heroicons/24/outline";


export default function NewForm() {

  const [cookies] = useCookies(['user']);
  const [inputedUser, setInputedUser] = useState({
    name: '',
    attendees: ''
  });
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

    const handleAddTheme = async e => {
    e.preventDefault();
    setLoading(true);
    if (!currentUser) {
      toast.error('Vous devez être connecté pour poster un message');
      router.push('/auth/');
    } else {
      const res = await fetch(`/api/theme/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name : inputedUser.name,
          attendees : inputedUser.attendees,
          user : currentUser?.id
        })
      });

      if (res.ok) {
        setLoading(false);
        router.push('/');
        toast.success('Theme créé avec succès');
      } else {
        setLoading(false);
        toast.error('Veuillez remplir tous les champs');
      }
    }
  };

  useEffect(() => {
    if (cookies.user) {
      setCurrentUser(cookies.user);
    } else {
      router.push('/');
      toast.error('Vous devez être connecté pour accéder à cette page');
    }
  }, [cookies.user, router]);

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
        <h1 className="font-bold text-3xl mb-12">Création d'un questionnaire</h1>

        <form onSubmit={handleAddTheme} className='inline-grid w-9/12'>
          <input
            type="text"
            placeholder='Titre du questionnaire'
            className='mb-8 border-b-2 w-full'
            value={inputedUser.name}
            onChange={e => setInputedUser({ ...inputedUser, name: e.target.value })}
          >
          </input>
          <input
            type="number"
            placeholder='Nombre de participant'
            className='mb-12 border-b-2 w-full'
            value={inputedUser.attendees}
            onChange={e => setInputedUser({ ...inputedUser, attendees: e.target.value })}
          >
          </input>
          <input
            type="file"
            placeholder='Nombre de participant'
            accept="image/png, image/jpeg, image/jpg"
            className='mb-12 border-b-2 w-full'
          >
          </input>
          <a href="#">Ajouter une question</a>
          <button type='submit' className="bg-cyan-500 p-3 rounded-full text-white font-bold">
            <span>Créer un formulaire</span>
          </button>
        </form>
      </main>
    </div>
  )
}
