import React from 'react'
import Image from 'next/image'
import {AiOutlinePlusCircle,AiFillInfoCircle} from "react-icons/ai"
import {IoExitOutline} from "react-icons/io5"
import Link from 'next/link'
import { useCookies } from 'react-cookie';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';

const Navbar = () => {

    const [menuActive, setMenuActive] = useState(false);
    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    const [currentUser, setCurrentUser] = useState(null);
    const router = useRouter();

    const logout = e => {
        e.preventDefault();
        setCurrentUser(null);
        removeCookie('user', { path: '/' });
        router.replace(router.asPath);
        toast.success('Déconnecté');
    };

    

    return (
        <div className='flex items-center justify-between p-2'>
            <Image src="/image/logo.png" width={40} height={40} alt="Logo"/>
            <div className='flex space-x-2'>
                
                
                <AiFillInfoCircle className='text-2xl'/>
                <AiOutlinePlusCircle className='text-2xl'/>
                {cookies.user && <li
                    className="list-none"
                    onClick={e => {
                      logout(e);
                      setMenuActive(!menuActive);
                    }}
                >
                    <Link href="/">
                        <IoExitOutline className='text-2xl'/>
                    </Link>
                </li>}
            </div>
        </div>
    );
};

export default Navbar;