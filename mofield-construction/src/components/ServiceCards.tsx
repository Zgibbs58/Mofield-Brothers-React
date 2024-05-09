"use client";
import {useEffect, useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from "framer-motion";
import { ContainerScroll, Card } from "../components/ui/container-scroll-animation"; // Import from the file where you have defined these components



const ServiceCards = ({img, title, text}: {img: string, title: string, text: string}) => {
  

  return (
    <>
    <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
        className="card card-compact bg-base-200 rounded-md shadow-xl w-full h-96"
          >
            <figure className=''><Image width={700} height={200} src={img} alt={title}></Image></figure>
            <div className="card-body">
              <h2 className="card-title text-xl md:text-2xl">
                {title}
              </h2>
              <p>{text}</p>
              <div className="card-actions justify-start">
                <Link href={'/services'} className="btn btn-outline btn-base-content hover:btn-active ease-in-out duration-300">Services &#x2192;</Link>
            </div>
            </div>
    </ motion.div>
    </>
  )
}

export default ServiceCards