"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";


const AboutLong = () => {
  return (
    <motion.section 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.1 }} 
          className="flex flex-row flex-wrap 2xl:flex-nowrap justify-start items-center gap-6 xl:gap-12 py-24 px-6 md:px-24">
      <Image className="object-cover shadow-xl 2xl:w-1/2" width={1200} height={1200} src={"/images/aboutImage.jpg"} alt="Mofield brothers and dad"></Image>
      <div className="flex flex-col gap-6 2xl:w-1/2">
        <h2 className="text-4xl md:text-6xl font-semibold">Mofield Brothers Construction</h2>
        <p>Mofield Brothers Construction Company has a rich history spanning over six decades, rooted in the expertise and dedication of its founders, John and Marvin Trigger Mofield. Established in 1961, the company has evolved under the leadership of John's son, Mike Mofield, who now leads the business alongside his sons, Martin and Judson Mofield. With a combined experience of over 75 years in the construction industry, Mofield Brothers is renowned for its reliability and excellence in the Middle Tennessee area. 
          <br /><br />The Mofield family's deep connection to the land is evident, with three generations of farming experience shaping their work ethic and commitment to quality. From humble beginnings as laborers and farmers to becoming accomplished machine operators and respected business leaders, the Mofields bring a wealth of knowledge and passion to every project they undertake.
          <br /><br />With their extensive background and expertise, Mofield Brothers Construction Company is well-equipped to tackle a wide range of construction projects, delivering superior results and exceeding client expectations. Whether it's residential, commercial, or agricultural construction, you can trust Mofield Brothers to bring dedication, skill, and integrity to every job.
        </p>
      </div>
    </motion.section>
  );
};

export default AboutLong;