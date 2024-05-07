"use client";
import React from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { Bitter } from "next/font/google";

const bitter = Bitter({subsets: ["latin"] });

const ServiceTitle = () => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 0.4, 1], ['60%', '30%', '0%']);
    const opacity = useTransform(scrollYProgress, [0, 0.3, .8], [0, 0.5, 1]);

    return (
        <motion.div className="py-24" style={{ y, opacity }}>
            <h3 className={`text-4xl md:text-6xl font-semibold text-left ${bitter.className}`}>Services</h3>
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

export default ServiceTitle;