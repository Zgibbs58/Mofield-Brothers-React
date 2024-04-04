import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  return (
    <main className="">
      <nav className="navbar bg-base-100 sticky top-0 z-10">
        <div className="flex-1">
          <Link href="/"><Image width={250} height={100} src="/mofieldLogo.png" alt="Mofield Logo" /></Link>
        </div>
        <div className="dropdown md:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </div>
          <ul tabIndex={0} className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
            <Link className="hover:text-primary" href="/">Home</Link>
            <Link className="hover:text-primary" href="/services">Services</Link>
            <Link className="hover:text-primary" href="/about">About</Link>
            <Link className="hover:text-primary" href="/gallery">Gallery</Link>
            <Link className="hover:text-primary" href="/contact">Contact</Link>
          </ul>
        </div>
        <div className="hidden md:flex flex-none">
          <ul className="menu menu-horizontal gap-3 px-1">
            <Link className="hover:text-primary" href="/">Home</Link>
            <Link className="hover:text-primary" href="/services">Services</Link>
            <Link className="hover:text-primary" href="/about">About</Link>
            <Link className="hover:text-primary" href="/gallery">Gallery</Link>
            <Link className="hover:text-primary" href="/contact">Contact</Link>
          </ul>
        </div>
      </nav>
      <div className="hero min-h-96 relative bg-hero">
        <div className="hero-overlay bg-black bg-opacity-30"></div>
        <div className="hero-content text-center">
          <div className="max-w-md text-base-100">
            <h1 className="text-3xl md:text-5xl font-bold">Mofield Brothers</h1>
            <p className="py-6 text-xl md:text-3xl">Family Owned & Operated Since 1961</p>
            <button className="btn btn-primary">Contact Us</button>
          </div>
        </div>
      </div>
      <Link href="/users">Users</Link>
      <ProductCard />
      <div className="h-96"></div>
    </main>
  );
}
