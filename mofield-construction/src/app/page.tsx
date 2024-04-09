
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
const bigShoulders = Bitter({subsets: ["latin"] });


export default function Home() {
  
  return (
    <main className="">
      <div className="hero h-100 relative bg-hero">
        <div className="hero-overlay bg-black bg-opacity-35"></div>
        <div className={`hero-content text-center`}>
          <div className="md:max-w-2xl text-base-100">
            <h1 className={`text-4xl md:text-6xl font-bold ${bigShoulders.className}`}>Mofield Brothers</h1>
            <p className={`py-3 md:py-4 text-xl md:text-4xl font-semibold ${bigShoulders.className}`}>Family Owned & Operated Since 1961</p>
            <button className="btn btn-primary text-3xl">Contact Us</button>
          </div>
        </div>
      </div>
      <div className="px-6 md:px-12">
          <h3 className="text-4xl font-semibold text-center py-12">Services</h3>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-6">
          <ServiceCards img={"/waterSewer.jpg"} title={"Water and Sewer Lines"} text={"This is our bread and butter. We have experience ranging from residential jobs, all the way up to large scale utility projects."} />
          <ServiceCards img={"/excavationSm.jpg"} title={"Excavation"} text={"Let us do what we do best, DIG! We are well equipped for land excavation, leveling, rock hammering, and brush clearing."} />
          <ServiceCards img={"/directionalDrillSm.jpg"} title={"Directional Drilling"} text={"No matter the size, we can drill around it. We can drill under driveways, highways, rivers, and more."} />
          <ServiceCards img={"/truckSm.jpg"} title={"Dump Truck Hauling"} text={"We have an entire fleet of dump trucks at our disposal. Capable of hauling in or out whatever is needed for the job."} />
        </section>
        <section className="flex flex-row flex-wrap lg:flex-nowrap justify-center items-start gap-6 xl:gap-12 py-48">
          <Image className="w-full object-cover" width={567} height={380} src={"/aboutimage.jpg"} alt="Mofield brothers and dad"></Image>
          <div className="flex flex-col">
            <h3 className="text-3xl font-semibold pb-6">Mofield Brothers Construction</h3>
            <p>Mofield Brothers Construction Company was founded in 1961 by John and Marvin <i>Trigger</i> Mofield. It is now owned and operated by John&apos;s son, Mike. He runs Mofield Brothers with the help of his two sons, Martin and Judson Mofield. With over 75 years of combined experience in the construction industry, they are a trusted, well known company in the Middle Tennessee area. <br /><br />They have three generations of farming experience and a lifetime passion for working the land they were born on. They have been laborers, farmers, machine operators, and business leaders. Mofield Brothers Construction Company is well equipped to handle your next job.</p>
          </div>
        </section>
        <section className="pb-20">
          <Gallery photos={photos}/>
        </section>
      </div>
      
    </main>
  );
}
