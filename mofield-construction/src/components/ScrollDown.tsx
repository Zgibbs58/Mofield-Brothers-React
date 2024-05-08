"use client";
import React from 'react';
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollDown = () => {

    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.1, 0.11], [1, 0.05, 0]);

  return (
    <motion.div style={{ opacity }} className="absolute bottom-6 text-center text-white">
      <p className='text-2xl'>Learn More</p>
      <p className="animate-bounce text-white text-4xl">&darr;
</p>
      <style jsx>{`
        .animate-bounce {
          animation: bounce 0.5s infinite;
          opacity: 0;
          animation-direction: alternate;
        }
        @keyframes bounce {
          from {
            transform: translateY(-10px);
            opacity: 0;
          }
          to {
            transform: translateY(10px);
            opacity: 1;
          }
        }
      `}</style>
    </motion.div>
  )
}

export default ScrollDown;