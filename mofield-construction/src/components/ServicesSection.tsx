"use client";
import React from "react";
import { motion } from "framer-motion";
import { Bitter } from "next/font/google";
import ServiceGridItem from '@/components/ServiceGridItem';

const bitter = Bitter({subsets: ["latin"] });


const ServicesSection = () => {

    const services = [
  {
    tags: ["infrastructure projects", "pipeline installation", "residential", "commercial"],
    lightColor: 'bg-primary',
    darkColor: 'dark:bg-green-300',
    title: "Water & Sewer",
    icon: "/images/pipeIcon.svg",
    text: "Water and sewer lines are at the heart of Mofield Brothers Construction Company's expertise and experience. With a robust portfolio that spans residential projects to large-scale utility undertakings, we have established ourselves as professionals in the industry. Our team possesses the knowledge, skills, and resources necessary to handle a wide range of water and sewer line installations. Whether it's laying down pipelines for individual homes or managing complex infrastructure projects, we approach each job with meticulous attention to detail and a commitment to quality."
  },
  {
    tags: ["land clearing", "site preparation"],
    lightColor: 'bg-green-300',
    darkColor: 'dark:bg-base-content',
    title: "Excavation",
    icon: "/images/excavatorIcon.svg",
    text: "At Mofield Brothers Construction Company, excavation is at the core of our expertise. With state-of-the-art equipment and skilled operators, we undertake a wide range of excavation projects with precision and efficiency. From land clearing and leveling to rock hammering and brush clearing, we have the capabilities to handle diverse excavation tasks. Whether it's preparing sites for construction, creating drainage solutions, or excavating for utilities, our team's extensive experience ensures high-quality results that meet and exceed our clients' expectations."
  },
  {
    tags: ["underground utilities", "precision drilling"],
    lightColor: 'bg-neutral-content',
    title: "Directional Drilling",
    icon: "/images/drillIcon.svg",
    text: "Mofield Brothers Construction Company offers expert directional drilling services tailored to meet diverse project requirements. With cutting-edge technology and experienced operators, we excel in drilling under various obstacles, including driveways, highways, rivers, and more. Our directional drilling solutions are ideal for projects of all sizes, providing efficient and precise results while minimizing disruption to the surrounding environment. Whether it's laying utility lines, installing pipelines, or completing underground installations, our team has the expertise and equipment to get the job done safely and effectively."
  },
  {
    tags: ["material transportaion", "dirt removal", "rock hauling"],
    lightColor: 'bg-accent',
    darkColor: 'bg-red-400',
    title: "Hauling",
    icon: "/images/dumpTruckIcon.svg",
    text: "Mofield Brothers Construction Company boasts an extensive fleet of dump trucks, providing reliable hauling services for a wide range of projects. Our dump trucks are equipped to handle both inbound and outbound materials, ensuring efficient transportation of construction materials, debris, and equipment to and from the job site. Whether it's earthmoving, debris removal, or material delivery, our experienced drivers and well-maintained trucks are ready to tackle any hauling task. With our commitment to prompt and professional service, you can trust us to deliver your materials safely and on time, every time."
  }
];

  return (
    <motion.section
         initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.1 }} 
        >
          <div className="flex flex-col justify-center py-24 xl:w-1/2 gap-2 px-6 md:px-24">
            <h4 className={`text-4xl md:text-5xl font-semibold ${bitter.className}`}>Expert Services:</h4>
            <p className={`text-4xl md:text-5xl font-semibold ${bitter.className}`}>Built on Trust</p>
            <p className='pt-4'>Mofield Construction brings decades of experience to every project. From water and sewer installations to precision excavation, directional drilling, and efficient dump truck hauling, we deliver unmatched service with reliability and precision. Let's work together to build a strong foundation for your next project.</p>
          </div>
          <div className="grid md:grid-cols-2 pb-12 md:pb-48">
            {services.map((service) => (
              <ServiceGridItem
                key={service.title}
                tags={service.tags}
                lightColor={service.lightColor}
                darkColor={service.darkColor}
               title={service.title}
                icon={service.icon}
                text={service.text}
              />
            ))}
          </div>
        </motion.section>
  );
};

export default ServicesSection;