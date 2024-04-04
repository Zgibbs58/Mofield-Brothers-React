
import Link from "next/link";
import ProductCard from "../components/ProductCard";
import { useState } from "react";

export default function Home() {
  
  return (
    <main className="">
      <div className="hero h-100 relative bg-hero">
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
