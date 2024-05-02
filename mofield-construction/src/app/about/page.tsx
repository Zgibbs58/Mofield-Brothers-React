import React from 'react'
import { Bitter } from "next/font/google";
import Image from 'next/image';

const bitter = Bitter({subsets: ["latin"] });

export default function about() {
  return (
    <main>
    <div className="hero h-40 md:h-64 relative bg-heroLg bg-center">
        <div className="bg-yellow-800 bg-opacity-30 h-full w-full bg-gradient-to-br from-yellow-950 dark:from-stone-800 dark:bg-stone-900 dark:bg-opacity-40"></div>
            <h3 className={`text-4xl md:text-6xl font-semibold text-white py-12 ${bitter.className}`}>About</h3>
    </div>
    <section className="flex flex-row flex-wrap 2xl:flex-nowrap justify-center items-start gap-6 xl:gap-12 py-16 md:py-48 px-6 md:px-24">
          <Image className="object-cover" width={600} height={600} src={"/images/aboutImage.jpg"} alt="Mofield brothers and dad"></Image>
          <div className="flex flex-col">
            <h2 className="text-5xl font-semibold pb-6">Mofield Brothers Construction</h2>
            <p>Mofield Brothers Construction Company has a rich history spanning over six decades, rooted in the expertise and dedication of its founders, John and Marvin Trigger Mofield. Established in 1961, the company has evolved under the leadership of John's son, Mike Mofield, who now leads the business alongside his sons, Martin and Judson Mofield. With a combined experience of over 75 years in the construction industry, Mofield Brothers is renowned for its reliability and excellence in the Middle Tennessee area. 
              <br /><br />The Mofield family's deep connection to the land is evident, with three generations of farming experience shaping their work ethic and commitment to quality. From humble beginnings as laborers and farmers to becoming accomplished machine operators and respected business leaders, the Mofields bring a wealth of knowledge and passion to every project they undertake.
              <br /><br />With their extensive background and expertise, Mofield Brothers Construction Company is well-equipped to tackle a wide range of construction projects, delivering superior results and exceeding client expectations. Whether it's residential, commercial, or agricultural construction, you can trust Mofield Brothers to bring dedication, skill, and integrity to every job.
            </p>
          </div>
        </section>
</main>

  )
}

