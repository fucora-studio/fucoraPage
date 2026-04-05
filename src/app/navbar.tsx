"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className='sticky top-0'>
            <div className='flex flex-row bg-fucoraCards pt-1.5 pb-1.5 shadow-xl shadow-furcoreButton/20 justify-between'>
                <Link href="/" className='pt-1.5 pl-1.5'>
                    <img src="/favicon.png" alt='Logo' className='w-10 h-10'/>
                </Link>
                <div className='pr-10'>
                    <button onClick={handleOpen}>
                        {isOpen ? <img className="w-10 h-10" src="./closeHamburg.svg"/> : <img className="w-10 h-10" src="./hamburg.svg"/>}
                    </button>
                    
                </div>
            </div>
            <div style={{visibility: isOpen ? 'visible' : 'hidden'}} className='flex flex-col absolute right-0 pr-10 h-screen w-40 items-center text-xl pt-5 bg-fucoraCards'>
                <Link href="/about" className='pl-5 pt-3 text-fucoraText'>About</Link>
                <Link href="/projects" className='pl-5 pt-3 text-fucoraText'>Projects</Link>
                <Link href='/contact' className='pl-5 pt-3 text-fucoraText'>Contact</Link>
            </div>
        </div>
    )
}