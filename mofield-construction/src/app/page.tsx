
import Link from "next/link";
import ServiceCards from "@/components/ServiceCards";
import Image from "next/image";
import Gallery from "@/components/Gallery";
import photos from "@/components/homePhotos";
// import { Bebas_Neue } from "next/font/google";
// import { Stick_No_Bills } from "next/font/google";
import { Bitter } from "next/font/google";

// const bigShoulders = Bebas_Neue({ weight: "400", subsets: ["latin"] });
// const bigShoulders = Stick_No_Bills({subsets: ["latin"] });
const bitter = Bitter({subsets: ["latin"] });


export default function Home() {
  
  return (
    <main className="">
      <div className="hero h-100 relative bg-heroSm md:bg-heroLg">
        <div className="hero-overlay bg-black bg-opacity-50"></div>
        <div className={`hero-content text-center`}>
          <div className="md:max-w-2xl text-base-100">
            <h1 className={`text-4xl text-primary dark:text-base-content md:text-6xl font-bold ${bitter.className}`}>Mofield Brothers</h1>
            <p className={`text-primary dark:text-base-content text-xl md:text-4xl font-semibold pt-2 pb-6 md:pt-4 md:pb-8 ${bitter.className}`}>Family Owned & Operated Since 1961</p>
            <Link href={"/contact"} className="text-base-content bg-primary dark:bg-base-content dark:text-secondary hover:bg-yellow-600 ease-in-out duration-300 rounded-md font-semibold py-2 text-2xl px-4 md:text-4xl">Contact Us</Link>
          </div>
        </div>
      </div>
        <section className="flex flex-row flex-wrap 2xl:flex-nowrap justify-center items-start gap-6 xl:gap-12 py-48 px-6 md:px-12">
          <Image className="object-cover" width={600} height={600} src={"/images/aboutimage.jpg"} alt="Mofield brothers and dad"></Image>
          <div className="flex flex-col">
            <h2 className="text-5xl font-semibold pb-6">Mofield Brothers Construction</h2>
            <p>Mofield Brothers Construction Company has a rich history spanning over six decades, rooted in the expertise and dedication of its founders, John and Marvin Trigger Mofield. Established in 1961, the company has evolved under the leadership of John's son, Mike Mofield, who now leads the business alongside his sons, Martin and Judson Mofield. With a combined experience of over 75 years in the construction industry, Mofield Brothers is renowned for its reliability and excellence in the Middle Tennessee area. 
              <br /><br />The Mofield family's deep connection to the land is evident, with three generations of farming experience shaping their work ethic and commitment to quality. From humble beginnings as laborers and farmers to becoming accomplished machine operators and respected business leaders, the Mofields bring a wealth of knowledge and passion to every project they undertake.
              <br /><br />With their extensive background and expertise, Mofield Brothers Construction Company is well-equipped to tackle a wide range of construction projects, delivering superior results and exceeding client expectations. Whether it's residential, commercial, or agricultural construction, you can trust Mofield Brothers to bring dedication, skill, and integrity to every job.
            </p>
          </div>
        </section>
        <section className='px-6 md:px-12 pb-24'>
          <h3 className="text-5xl font-semibold text-left py-12">Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-10 md:gap-6">
            <ServiceCards img={"/images/waterSewerSm.jpg"} title={"Water & Sewer Lines"} text={"Overflowing with experience and craftsmanship, we deliver on quality and precision. From residential projects to large-scale utility endeavors, we're equipped to handle it all."} />
            <ServiceCards img={"/images/excavationSm.jpg"} title={"Excavation"} text={"Let us do what we do best, DIG! Our excavation services include land clearing, leveling, rock hammering, and brush clearing, all executed with precision and efficiency."} />
            <ServiceCards img={"/images/directionalDrillSm.jpg"} title={"Directional Drilling"} text={"We drill with precision and confidence! Our directional drilling services are perfect for projects of any size. We drill under driveways, highways, and rivers."} />
            <ServiceCards img={"/images/truckSm.jpg"} title={"Truck Hauling"} text={"From hauling in construction materials to removing debris, our reliable trucks and experienced drivers ensure efficient transportation for your project needs."} />
          </div>
        </section>
        <section className="pb-20 px-6 md:px-12 text-center">
          <h3 className="text-5xl text-left font-semibold py-12">Gallery</h3>
          <Gallery photos={photos}/>
          <Link className="btn btn-outline mt-6" href={"/projects"}>View More</Link>
        </section>
      
    </main>
  );
}
