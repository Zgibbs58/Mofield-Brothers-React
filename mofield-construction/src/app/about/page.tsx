import React from 'react'
import {motion} from 'framer-motion'
import { Bitter } from "next/font/google";
import Image from 'next/image';
import { Metadata } from "next";
import AboutLong from '@/components/AboutLong';

export const metadata: Metadata = {
  title: "About | Mofield Brothers Construction Company",
  description: "Learn more about the history and expertise of Mofield Brothers Construction Company.",
  keywords: ["about", "history", "construction", "mofield", "mofield construction"],
  robots: "index, follow",
};

const bitter = Bitter({subsets: ["latin"] });

export default function about() {
  return (
    <main className='overflow-x-hidden'>
    <div className="hero h-40 md:h-64 relative bg-heroLg bg-center">
        <div className="bg-yellow-800 bg-opacity-30 h-full w-full bg-gradient-to-br from-yellow-950 dark:from-stone-800 dark:bg-stone-900 dark:bg-opacity-40"></div>
            <h3 className={`text-4xl md:text-6xl font-semibold text-white py-12 ${bitter.className}`}>About</h3>
    </div>
    <AboutLong />
</main>

  )
}

