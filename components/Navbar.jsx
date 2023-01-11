import React from 'react'
import Image from 'next/image'
import {AiOutlinePlusCircle,AiFillInfoCircle} from "react-icons/ai"
import {IoExitOutline} from "react-icons/io5"

const Navbar = () => {
    return (
        <div className='flex items-center justify-between p-2'>
            <Image src="/image/logo.png" width={40} height={40} alt="Logo"/>
            <div className='flex space-x-2'>
                <AiFillInfoCircle className='text-2xl'/>
                <AiOutlinePlusCircle className='text-2xl'/>
                <IoExitOutline className='text-2xl'/>
            </div>
        </div>
    );
};

export default Navbar;