import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center text-center p-4 bg-black dark:bg-base-200 text-gray-200 gap-2">
      <nav className="grid-flow-col">
        <ul className="menu menu-horizontal gap-4 sm:gap-6 px-1">
          <Link
            className="relative md:text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gray-200 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
            href="/"
          >
            Home
          </Link>
          <Link
            className="relative md:text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gray-200 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
            href="/services"
          >
            Services
          </Link>
          <Link
            className="relative md:text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gray-200 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
            href="/about"
          >
            About
          </Link>
          <Link
            className="relative md:text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gray-200 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
            href="/projects"
          >
            Projects
          </Link>
          <Link
            className="relative md:text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gray-200 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
            href="/contact"
          >
            Contact
          </Link>
        </ul>
      </nav>
      <aside className="flex flex-col items-center">
        <p className="text-xs md:text-sm">© 2024 Mofield Brothers Contruction Co., LLC. All rights reserved.</p>
        <p className="text-xs md:text-sm">
          Website crafted by{" "}
          <a className="text-yellow-300" href="https://www.zacharywgibbs.com/">
            Zach Gibbs
          </a>{" "}
          - Elevate your online presence with my design and development services.
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
