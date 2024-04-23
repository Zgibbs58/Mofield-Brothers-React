import React from 'react'
import Gallery from '../../components/Gallery'
import photos from '../../components/galleryPhotos'
import { Bitter } from "next/font/google";
import Image from 'next/image';

const bitter = Bitter({subsets: ["latin"] });

export default function Pojects() {
  return (
    <main>
      <div className="hero h-50 md:h-60 relative bg-heroLg bg-center">
        <div className="hero-overlay bg-black bg-opacity-45"></div>
            <h3 className={`text-6xl font-semibold text-primary dark:text-base-content py-12 ${bitter.className}`}>Projects</h3>
      </div>
    <section className="px-6 md:px-12 py-24">
      <Gallery photos={photos}/>
    </section>
    </main>
  )
}
