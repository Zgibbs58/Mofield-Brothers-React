
import Link from "next/link";
import ServiceCards from "../components/ServiceCards";
import Image from "next/image";
import Gallery from "../components/Gallery";
import photos from "../components/homePhotos";
import ContactForm from "../components/ContactForm";
import { Bitter } from "next/font/google";

const bitter = Bitter({subsets: ["latin"] });


export default function Home() {
  
  return (
    <main className="">
      <div className="hero items-center h-100 bg-heroSm md:bg-heroLg">
      {/* <div className="grid grid-o h-100 bg-heroSm md:bg-heroLg"> */}
        <div className="hero-overlay bg-gradient-to-br from-stone-600 to-transparent"></div>
        <div className={`text-left flex justify-start w-full pl-6 md:pl-24`}>
          <div className="text-base-100">
            <h1 className={`text-4xl text-white dark:text-base-content md:text-6xl font-bold pb-4 ${bitter.className}`}>Mofield Bros Construction</h1>
            {/* <h2 className={`text-3xl text-primary dark:text-base-content md:text-6xl font-bold ${bitter.className}`}>Construction Company</h2> */}
            <p className={`text-white dark:text-base-content text-lg md:text-4xl font-semibold pb-6 md:pt-8 md:pb-10 ${bitter.className}`}>Family Owned & Operated Since 1961</p>
            <Link href={"/contact"} className="text-base-content bg-primary dark:bg-base-content dark:text-secondary hover:bg-yellow-600 ease-in-out duration-300 rounded-md font-semibold py-1 text-xl px-6 md:text-3xl">Contact Us</Link>
          </div>
        </div>
      </div>
        <section className="flex flex-row flex-wrap 2xl:flex-nowrap justify-center items-start gap-6 xl:gap-12 pt-24 md:pt-48 px-6 md:px-24">
          <Image className="object-cover" width={600} height={600} src={"/images/aboutImage.jpg"} alt="Mofield brothers and dad"></Image>
          <div className="flex flex-col">
            <h2 className="text-4xl md:text-6xl font-semibold pb-6">Mofield Brothers Construction</h2>
            <p className="pb-6">Mofield Brothers Construction Company has a rich history spanning over six decades, rooted in the expertise and dedication of its founders, John and Marvin Trigger Mofield. Established in 1961, the company has evolved under the leadership of John's son, Mike Mofield, who now leads the business alongside his sons, Martin and Judson Mofield. With a combined experience of over 75 years in the construction industry, Mofield Brothers is renowned for its reliability and excellence in the Middle Tennessee area. 
              <br /><br />The Mofield family's deep connection to the land is evident, with three generations of farming experience shaping their work ethic and commitment to quality. From humble beginnings as laborers and farmers to becoming accomplished machine operators and respected business leaders, the Mofields bring a wealth of knowledge and passion to every project they undertake.
              <br /><br />With their extensive background and expertise, Mofield Brothers Construction Company is well-equipped to tackle a wide range of construction projects, delivering superior results and exceeding client expectations. Whether it's residential, commercial, or agricultural construction, you can trust Mofield Brothers to bring dedication, skill, and integrity to every job.
            </p>
          </div>
        </section>
        <section className='pt-24 md:pt-48 px-6 md:px-24 pb-24'>
          <h3 className={`text-4xl md:text-6xl font-semibold text-left py-12 ${bitter.className}`}>Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-10 md:gap-6">
            <ServiceCards img={"/images/waterSewerSm.jpg"} title={"Water & Sewer Lines"} text={"Overflowing with experience and craftsmanship, we deliver on quality and precision. From residential projects to large-scale utility endeavors, we're equipped to handle it all."} />
            <ServiceCards img={"/images/excavationSm.jpg"} title={"Excavation"} text={"Let us do what we do best, DIG! Our excavation services include land clearing, leveling, rock hammering, and brush clearing, all executed with precision and efficiency."} />
            <ServiceCards img={"/images/directionalDrillSm.jpg"} title={"Directional Drilling"} text={"We drill with precision and confidence! Our directional drilling services are perfect for projects of any size. We drill under driveways, highways, and rivers."} />
            <ServiceCards img={"/images/truckSm.jpg"} title={"Hauling"} text={"From hauling in construction materials to removing debris, our reliable trucks and experienced drivers ensure efficient transportation for your project needs."} />
          </div>
        </section>
        <section className={`pt-24 md:pt-48 px-6 md:px-24 text-center`}>
          <h3 className={`text-4xl md:text-6xl text-left font-semibold py-12 ${bitter.className}`}>Projects</h3>
          <Gallery photos={photos}/>
          <Link className="btn btn-outline mt-6" href={"/projects"}>Project Gallery</Link>
        </section>
        <section className="flex py-24 md:py-48 px-6 md:px-24">
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
