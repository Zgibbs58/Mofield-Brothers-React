import React from 'react'
import Image from 'next/image'
import Link from 'next/link'



type ServiceCardsProps = {
  img: string;
  title: string;
  text: string;
};

const ServiceCards: React.FC<ServiceCardsProps> = ({img, title, text}) => {
  return (
    <div className="card bg-primary text-secondary card-compact w-full h-full shadow-xl">
            <figure><Image width={700} height={200} src={img} alt={title}></Image></figure>
            <div className="card-body">
              <h2 className="card-title text-xl md:text-2xl">
                {title}
              </h2>
              <p>{text}</p>
              <div className="card-actions justify-end">
                <Link href={'/services'} className="btn btn-outline btn-secondary hover:btn-active  hover:scale-105 ease-in-out duration-300">Learn More</Link>
            </div>
            </div>
    </ div>
    // <div className="card w-full h-full image-full shadow-xl hover:scale-105 ease-in-out duration-300">
    //         <figure className=''><Image width={700} height={200} src={img} alt="water and sewer"></Image></figure>
    //         <div className="card-body">
    //         <img className='w-24' src='/wrenchIcon.png' alt="icon" />
    //           <h2 className="card-title text-xl md:text-2xl">
    //             {title}
    //           </h2>
    //           <p>{text}</p>
    //         </div>
    // </div>
  )
}

export default ServiceCards