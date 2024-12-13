"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
function Header() {

    const path = usePathname();
    useEffect(() => {
        // console.log(path)
    }, [])
    return (
        <div className='flex p-4 items-center justify-between bg-black shadow-sm sticky top-0 z-50'>
          <Link href={"/dashboard"}>
        <h1 className="text-xl font-bold cursor-pointer text-white">AI Mock Interviewer</h1>
        </Link>
            <ul className='hidden md:flex gap-6'>     
                <Link href={"/dashboard "}>
                <li className={`hover:text-yellow-400 hover:font-bold transition-all cursor-pointer text-white ${path == '/dashboard' && 'text-yellow-400 font-bold'}`}>Dashboard</li>
                </Link>
     
                <li className={`hover:text-yellow-400 hover:font-bold transition-all cursor-pointer  text-white ${path == '/dashboard/questions' && 'text-yello-400 font-bold'}`}>Questions</li>            
                <li className={`hover:text-yellow-400 hover:font-bold transition-all cursor-pointer  text-white ${path == '/dashboard/how' && 'text-yello-400 font-bold'}`}>How it Works?</li>
            </ul>
            <UserButton />
        </div >
    )
}

export default Header