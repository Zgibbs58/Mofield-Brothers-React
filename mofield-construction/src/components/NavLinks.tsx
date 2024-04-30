"use client";
import React from 'react'
import Link from 'next/link'
import { usePathname } from "next/navigation";

const NavLinks = () => {
    const pathname = usePathname();

    const links = [
        { id: 1, text: "Home", href: "/" },
        { id: 2, text: "Services", href: "/services" },
        { id: 3, text: "About", href: "/about" },
        { id: 4, text: "Projects", href: "/projects" },
        { id: 5, text: "Contact", href: "/contact" },
    ];
    
  return (
    links.map(
            ({ id, href, text }) =>
                <Link
                  key={id}
                  className={`relative text-sm lg:text-lg w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gray-200 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ${pathname === href && 'after:scale-x-100'}`}
                  href={href}
                >
                  {text}
                </Link>
          )
  )
}

export default NavLinks