import React from 'react'
import { Bitter } from "next/font/google";
import { Metadata } from "next";
import ServicesSection from '@/components/ServicesSection';

export const metadata: Metadata = {
  title: "Services | Mofield Brothers Construction Company",
  description: "Mofield Brothers Construction Company offers expert services in water and sewer, excavation, directional drilling, and hauling.",
  keywords: ["services", "water and sewer", "excavation", "directional drilling", "hauling", "mofield", "mofield construction"],
  robots: "index, follow",
};

const bitter = Bitter({subsets: ["latin"] });

export default function Services() {

  return (
    <main className='overflow-x-hidden'>
        <div className="hero h-40 md:h-64 relative bg-heroLg bg-center">
        <div className="bg-yellow-800 bg-opacity-30 h-full w-full bg-gradient-to-br from-yellow-950 dark:from-stone-800 dark:bg-stone-900 dark:bg-opacity-40"></div>
            <h3 className={`text-4xl md:text-6xl font-semibold text-white py-12 ${bitter.className}`}>Services</h3>
        </div>
        <ServicesSection />
    </main>
  );
}