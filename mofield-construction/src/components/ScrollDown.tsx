"use client";
import React from 'react';
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollDown = () => {

    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.1, 0.15], [1, 0.2, 0]);

  return (
    <motion.div style={{ opacity }} className="absolute bottom-5 text-center text-white">
      <p className='text-2xl'>Discover More</p>
      <p className="animate-bounce text-white text-3xl">&#129095;</p>
      <style jsx>{`
        .animate-bounce {
          animation: bounce 0.5s infinite;
          opacity: 0;
          animation-direction: alternate;
        }
        @keyframes bounce {
          from {
            transform: translateY(-20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </motion.div>
  )
}

export default ScrollDown;