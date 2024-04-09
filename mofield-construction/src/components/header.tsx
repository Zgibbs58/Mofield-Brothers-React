"use client"; //use in client bundle only

import React from 'react'
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
     const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar bg-base-100 sticky top-0 z-10">
        <div className="flex-1">
          <Link href="/"><Image className='hidden md:block' width={250} height={100} src="/mofieldLogo.png" alt="Mofield Logo" /><Image className='block md:hidden' width={175} height={50} src="/mofieldLogo.png" alt="Mofield Logo" /></Link>
        </div>
        <div className="md:hidden">
          <button tabIndex={0} role="button" className="btn btn-ghost btn-circle" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute w-full top-16 left-0 md:relative flex items-center justify-center gap-6 bg-base-100 shadow-md md:hidden"
              >

                  <ul tabIndex={0} className="text-center flex flex-col gap-4 text-xl w-full py-4">
                    <li className="hover:text-primary" onClick={toggleMenu}><Link href="/">Home</Link></li>
                    <li className="hover:text-primary" onClick={toggleMenu}><Link href="/services">Services</Link></li>
                    <li className="hover:text-primary" onClick={toggleMenu}><Link href="/about">About</Link></li>
                    <li className="hover:text-primary" onClick={toggleMenu}><Link href="/gallery">Gallery</Link></li>
                    <li className="hover:text-primary" onClick={toggleMenu}><Link href="/contact">Contact</Link></li>
                  </ul>
                </motion.div>
            )}
          </AnimatePresence>
        <div className="hidden md:flex flex-none">
          <ul className="menu menu-horizontal gap-6 px-1 text-lg">
            <Link className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-secondary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" href="/">Home</Link>
            <Link className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-secondary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" href="/services">Services</Link>
            <Link className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-secondary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" href="/about">About</Link>
            <Link className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-secondary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" href="/gallery">Gallery</Link>
            <Link className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-secondary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" href="/contact">Contact</Link>
          </ul>
        </div>
      </nav>
  )
}

export default Header
