"use client";
import Image from "next/image";
import { Bitter } from "next/font/google";
import { motion } from "framer-motion";
const bitter = Bitter({ subsets: ["latin"] });

const ServiceGridItem = ({title, icon, text, lightColor, darkColor, tags}: {title: string, icon: any, text: string, lightColor: string, darkColor?: any, tags: string[]}) => {
  return (
    <motion.div initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }} className={`flex flex-col ${lightColor} ${darkColor || ""} text-black p-6 md:p-24 gap-6`}>
      <div className="flex items-center justify-between xl:justify-start">
        <h4 className={`text-3xl lg:text-5xl font-bold pr-4 md:pr-10 ${bitter.className}`}>{title}</h4>
        <Image className="" src={icon} width={70} height={70} alt="icon"></Image>
      </div>
      <p className="lg:text-lg">
        {text}
      </p>
      <div className="flex gap-2 flex-wrap">
        {tags.map((tag) => (
            <p className="border border-black rounded-full px-4">{tag}</p>
        ))}
      </div>
    </motion.div>
  );
};

export default ServiceGridItem;
