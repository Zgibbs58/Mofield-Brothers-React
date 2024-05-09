"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";


const About = () => {
  return (
    <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-row flex-wrap xl:flex-nowrap justify-center items-center gap-6 xl:gap-12 px-6 md:px-24 pt-48">
        <Image className="object-cover rounded-md shadow-xl" width={1200} height={1200} src={"/images/aboutImage.jpg"} alt="Mofield brothers and dad" />
      <div className="flex flex-col gap-6 xl:w-2/3">
        <h2 className="text-4xl md:text-6xl font-semibold">Mofield Brothers Construction</h2>
        <p className="">
          Mofield Brothers Construction Company, established in 1961, is a family-owned business now led by Mike Mofield and his sons, Martin and Judson. With over 75 years of combined experience, they bring reliability and excellence to construction projects in Middle Tennessee. Their three generations of farming background have shaped their strong work ethic and commitment to quality. Whether residential, commercial, or agricultural projects, Mofield Brothers consistently delivers exceptional results and exceeds client expectations.
        </p>
        <Link href={'/about'} className="btn btn-outline btn-base-content w-48 hover:btn-active ease-in-out duration-300">About Us &#x2192;</Link>
      </div>
    </motion.div>
  );
};

export default About;