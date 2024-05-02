import React from 'react'
import Gallery from '../../components/Gallery'
import photos from '../../components/galleryPhotos.js';
import { Bitter } from "next/font/google";

const bitter = Bitter({subsets: ["latin"] });

export default function Pojects() {
  return (
    <main>
      <div className="hero h-40 md:h-64 relative bg-heroLg bg-center">
        <div className="bg-yellow-800 bg-opacity-30 h-full w-full bg-gradient-to-br from-yellow-950"></div>
            <h3 className={`text-4xl md:text-6xl font-semibold text-white py-12 ${bitter.className}`}>Projects</h3>
      </div>
    <section className="px-6 md:px-24 py-24">
      <Gallery photos={photos}/>
    </section>
    </main>
  )
}

