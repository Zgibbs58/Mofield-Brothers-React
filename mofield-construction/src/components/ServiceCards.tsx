import React from 'react'
import Image from 'next/image'

type ServiceCardsProps = {
  img: string;
  title: string;
  text: string;
};

const ServiceCards: React.FC<ServiceCardsProps> = ({img, title, text}) => {
  return (
    <div className="card w-full shadow-xl bg-primary text-secondary hover:scale-105 ease-in-out duration-300">
            <figure><Image width={550} height={200} src={img} alt="water and sewer"></Image></figure>
            <div className="card-body">
              <h2 className="card-title text-xl md:text-2xl">
                {title}
              </h2>
              <p>{text}</p>
              {/* <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div> 
                <div className="badge badge-outline">Products</div>
              </div> */}
            </div>
    </div>
  )
}

export default ServiceCards