import Link from "next/link";
import ServiceCards from "../components/ServiceCards";
import Image from "next/image";
import ScrollDown from "../components/ScrollDown";
import ServiceTitle from "../components/ServiceTitle";
import ProjectAnimation from "../components/ProjectAnimation";
import Gallery from "../components/Gallery";
import photos from "../components/homePhotos";
import ContactForm from "../components/ContactForm";
import { Bitter } from "next/font/google";
import { use } from "react";
import About from "../components/About";

const bitter = Bitter({subsets: ["latin"] });


export default function Home() {
  
  return (
    <main className="overflow-x-hidden">
      <div className="hero items-center h-screen bg-heroSm md:bg-heroLg">
      {/* <div className="grid grid-o h-100 bg-heroSm md:bg-heroLg"> */}
        <div className="bg-yellow-800 bg-opacity-30 h-full w-full bg-gradient-to-br from-yellow-950 dark:from-stone-800 dark:bg-stone-900 dark:bg-opacity-40"></div>
        <div className={`text-left flex justify-start w-full pl-6 md:pl-24`}>
          <div className="text-base-100">
            <h1 className={`hidden md:block text-2xl text-white md:text-6xl font-bold pb-2 ${bitter.className}`}>Mofield Bros Construction</h1>
            <h1 className={`block md:hidden text-white text-5xl font-bold pb-2 ${bitter.className}`}>Mofield</h1>
            <h1 className={`block md:hidden text-white text-5xl font-bold pb-2 ${bitter.className}`}>Brothers</h1>
            <h3 className={`block md:hidden text-white text-5xl font-bold pb-6 ${bitter.className}`}>Construction</h3>
            <p className={`text-white text-lg md:text-4xl font-semibold pb-6 md:pt-8 md:pb-10 ${bitter.className}`}>Family Owned & Operated Since 1961</p>
            <Link href={"/contact"} className="text-base-content bg-primary dark:bg-base-content dark:text-secondary hover:bg-yellow-600 ease-in-out duration-300 rounded-md font-semibold py-1 text-xl px-6 md:text-3xl">Contact Us</Link>
          </div>
        </div>
        <ScrollDown />
      </div>
        <About />
        <section className='px-6 md:px-24 py-48 md:py-64'>
          <div className="flex pb-12 items-center">
            <h3 className={`text-4xl md:text-6xl font-semibold text-left ${bitter.className}`}>Services</h3>
            <ServiceTitle />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-10 md:gap-6">
            <ServiceCards scrollProgress={0.4} img={"/images/waterSewerSm.jpg"} title={"Water & Sewer Lines"} text={"Overflowing with experience and craftsmanship, we deliver on quality and precision. From residential projects to large-scale utility endeavors, we're equipped to handle it all."} />
            <ServiceCards scrollProgress={0.42} img={"/images/excavationSm.jpg"} title={"Excavation"} text={"Let us do what we do best, DIG! Our excavation services include land clearing, leveling, rock hammering, and brush clearing, all executed with precision and efficiency."} />
            <ServiceCards scrollProgress={0.44} img={"/images/directionalDrillSm.jpg"} title={"Directional Drilling"} text={"We drill with precision and confidence! Our directional drilling services are perfect for projects of any size. We drill under driveways, highways, and rivers."} />
            <ServiceCards scrollProgress={0.46} img={"/images/truckSm.jpg"} title={"Hauling"} text={"From hauling in construction materials to removing debris, our reliable trucks and experienced drivers ensure efficient transportation for your project needs."} />
          </div>
        </section>
        <section className={`px-6 md:px-24 text-center`}>
          <div className="flex items-center pb-12">
            <h3 className={`text-4xl md:text-6xl text-left font-semibold ${bitter.className}`}>Projects</h3>
            <ProjectAnimation />
          </div>
          <Gallery photos={photos}/>
          <Link className="btn btn-outline mt-6" href={"/projects"}>Project Gallery</Link>
        </section>
        <section className="flex py-24 md:py-64 px-6 md:px-24">
          <div
            className="flex justify-start text-left md:gap-8 lg:gap-16  py-12 md:py-24 flex-wrap md:flex-nowrap"
          >
            <div className='w-full md:w-1/2 flex flex-col text-left pb-4'>
              <h4 className={`text-4xl md:text-6xl font-semibold py-4 ${bitter.className}`}>Get in Touch</h4>
              <p className='text-md md:text-lg'>
                We're here to help with your construction needs! Whether you have questions about our services or want to discuss a potential project, feel free to reach out. We're just a message away and look forward to speaking with you.
              </p>
            </div>
           <ContactForm />
          </div>
        </section>
    </main>
  );
}
