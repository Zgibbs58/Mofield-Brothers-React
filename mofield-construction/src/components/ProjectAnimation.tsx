"use client";
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { Bitter } from "next/font/google";
import Image from "next/image";
import { useInView } from 'react-intersection-observer';

const bitter = Bitter({subsets: ["latin"] });

const ProjectAnimation = () => {
    const { scrollYProgress } = useScroll();
    const [ref, inView] = useInView({
        triggerOnce: true, // Change this to false if you want the animation to restart whenever it comes back into view
    });
    const [animation, setAnimation] = useState('paused');
    const x = useTransform(scrollYProgress, inView ? [0.2, 0.7, 1] : [0, 0, 0], inView ? ['600%', '100%', '-200%'] : ['0%', '0%', '0%']);

    useEffect(() => {
        if (inView) {
            setAnimation('running');
        }
    }, [inView]);

    return (
        <motion.div className="" ref={ref}>
            <motion.div style={{ x }}>
                <div className='vibrate' style={{ animationPlayState: animation }}>
                    <svg className='excavatorIcon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="80" height="80"><path d="M111.17242,69.04364A6.00007,6.00007,0,1,0,102.687,77.529v.00049a6.00024,6.00024,0,0,0,8.48541-8.48584Z"/><path d="M79.00037,37.49988A11.99994,11.99994,0,1,0,67.00031,25.49994,12.01344,12.01344,0,0,0,79.00037,37.49988Z"/><circle cx="66" cy="100.5" r="2"/><path d="M96,111.5H78.85a14.5371,14.5371,0,0,0,5.15-11c0-8.28-7.16-15-16-15H54v-6H79a2,2,0,0,0,0-4H62.68L57.47,43.27l10.75-5.98a16.66052,16.66052,0,0,1-2.64-3.1L56.75,39.1,54.99,28.88l8.02-3.5a15.76137,15.76137,0,0,1,.73-4.69l-9.45,4.13-.46-2.68a7.97757,7.97757,0,0,0-7.88-6.64H19a8.01062,8.01062,0,0,0-8,8v54a2.00591,2.00591,0,0,0,2,2H30v6H16c-8.84,0-16,6.72-16,15a14.5371,14.5371,0,0,0,5.15,11H2a2,2,0,0,0,0,4H96a2,2,0,0,0,0-4ZM57.5755,67.40564l1.05078,8.09406h-27.465l4.8-8h21.039A1.97812,1.97812,0,0,0,57.5755,67.40564ZM50.00024,79.49969v5.99994H34.00018V79.49969Zm-23.96124-4H15.00006V23.49994a4.00428,4.00428,0,0,1,4.00006-4H45.94653a3.9915,3.9915,0,0,1,3.94141,3.32031l5.63464,32.6795H47.095l-1.02069-3.99994h.926a2,2,0,0,0,0-4H41.00018a2,2,0,0,0,0,4h.94653l1.657,6.49457a1.99915,1.99915,0,0,0,1.93756,1.50537h10.671l.68976,4H36.36346L32.71014,37.22449a1.999,1.999,0,0,0-1.98053-1.72461H21.00012a2,2,0,0,0,0,4H28.9884l3.59076,25.82477ZM18,106.5a6,6,0,1,1,6-6A6.00476,6.00476,0,0,1,18,106.5Zm16,0a6,6,0,1,1,6-6A6.00476,6.00476,0,0,1,34,106.5Zm16,0a6,6,0,1,1,6-6A6.00476,6.00476,0,0,1,50,106.5Zm16,0a6,6,0,1,1,6-6A6.00476,6.00476,0,0,1,66,106.5Z"/><circle cx="50" cy="100.5" r="2"/><circle cx="18" cy="100.5" r="2"/><circle cx="34" cy="100.5" r="2"/><path d="M127.79651,97.28131a15.09428,15.09428,0,0,0-6.082-9.93158,13.24407,13.24407,0,0,0-8.49713-2.437l-1.34412-2.94037a9.89474,9.89474,0,0,1-3.82867,1.24744l2.14252,4.68707a2.00086,2.00086,0,0,0,2.18457,1.13477,9.2194,9.2194,0,0,1,7.03912,1.57861,11.06983,11.06983,0,0,1,4.43652,7.29779c.959,5.94629-2.67871,11.60541-8.10748,12.61517a1.99994,1.99994,0,1,0,.73047,3.93262C124.01721,113.0625,129.09827,105.35352,127.79651,97.28131Z"/><path d="M81.43146,41.295,97.70959,69.40588a9.97994,9.97994,0,0,1,2.14929-3.19128c.13135-.13135.27252-.24866.40973-.3717L85.39484,40.15729A15.86281,15.86281,0,0,1,81.43146,41.295Z"/><path d="M104.20209,63.66895a9.72305,9.72305,0,0,1,4.35614-.23987L93.19391,32.85577A16.06027,16.06027,0,0,1,90.563,36.52856Z"/></svg>
                    {/* <Image src={"/images/excavatorIconReverse.svg"} width={80} height={80} alt='Excavator Icon'></Image> */}
                </div>
            </motion.div>
            <style jsx>{`
                .vibrate {
                    animation: vibrate 0.1s infinite alternate;
                    animation-timing-function: ease-in-out;
                    animation-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55);
                }
                .excavatorIcon {
                    transform: scaleX(-1); /* This will flip the SVG */
                }
                @keyframes vibrate {
                    0% {
                        transform: translateY(-0.25px) rotate(-0.5deg);
                    }
                    100% {
                        transform: translateY(0.25px) rotate(0.5deg);
                    }
                }
            `}</style>
        </motion.div>
    )
}

export default ProjectAnimation;