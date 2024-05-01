"use client"; //use in client bundle only

import React from 'react'
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import NavLinks from './NavLinks';
import { useTheme } from "next-themes";
import { Bitter } from "next/font/google";

const bitter = Bitter({subsets: ["latin"] });

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
   
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <nav className="navbar justify-between bg-black dark:bg-base-200 text-gray-200 sticky top-0 z-30 px-4 md:px-8 py-2">
        <div className="">
          <Link href="/" aria-label='Home Link'>
            <Image className="hidden sm:block" width={100} height={100} src="/images/mLogo.png" alt="Mofield Logo" />
            <Image className="sm:hidden block" src="/images/mLogo.png" alt="Mofield Brothers Contruction Logo" width={50} height={50} />
          </Link>
        </div>
        <div className="md:hidden">
          <button tabIndex={0} role="button" className="btn btn-ghost btn-circle" onClick={toggleMenu} aria-label='Menu'>
            {isOpen ? (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-9 h-9 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 6l12 12M18 6L6 18"/></svg>)
              : (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-9 h-9 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>)}
          </button>
        </div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 300 }}
                transition={{ duration: 0.3 }}
                className="fixed w-full top-16 left-0 flex items-center justify-center gap-6 bg-black dark:bg-base-200 text-gray-200 shadow-md shadow-black md:hidden rounded-b-lg"
              >

                  <ul tabIndex={0} className="text-left flex flex-col text-xl w-full pl-10 py-2 font-semibold">
                    <li className={`py-2 ${bitter.className}`} onClick={toggleMenu}><Link href="/">Home</Link></li>
                    <li className={`py-2 ${bitter.className}`} onClick={toggleMenu}><Link href="/services">Services</Link></li>
                    <li className={`py-2 ${bitter.className}`} onClick={toggleMenu}><Link href="/about">About</Link></li>
                    <li className={`py-2 ${bitter.className}`} onClick={toggleMenu}><Link href="/projects">Projects</Link></li>
                    <li className={`py-2 ${bitter.className}`} onClick={toggleMenu}><Link href="/contact">Contact</Link></li>
                  </ul>
                </motion.div>
            )}
          </AnimatePresence>
        <div className="hidden md:flex flex-none">
          <ul className={`menu menu-horizontal gap-6 px-1 text-lg ${bitter.className}`}>
            <NavLinks />
          </ul>
        </div>
      </nav>
      </>
  )
}

export default Header
