"use client";
import {useEffect, useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from "framer-motion";


const ServiceCards = ({scrollProgress, img, title, text}: {scrollProgress: number, img: string, title: string, text: string}) => {
const [width, setWidth] = useState<number>(0);
 useEffect(() => {
    if (typeof window !== 'undefined') {
      setWidth(window.innerWidth);
    }
  }, []);

  if (width < 640) {
    scrollProgress += 0.1;
  }

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.2, scrollProgress, 1], [0, 1, 1]);
  const x = useTransform(scrollYProgress, [0.2, scrollProgress, 1], ['50vw', '0vw', '0vw']);

  return (
    <>
    <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.1 }}
          className="card card-compact bg-base-200 w-full h-full shadow-xl"
          >
            <figure><Image width={700} height={200} src={img} alt={title}></Image></figure>
            <div className="card-body gap-4">
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