'use client';

import Image from 'next/image';

import img1 from "@/assets/imgs/DJI_ok 0056.jpg"
import img2 from "@/assets/imgs/DJI_ok 0180.jpg"
import img3 from "@/assets/imgs/IMG_ok 0010.jpg"
import img4 from "@/assets/imgs/IMG_ok 0037.jpg"
import img5 from "@/assets/imgs/IMG_ok 0049.jpg"
import img6 from "@/assets/imgs/IMG_ok 0057.jpg"
import img7 from "@/assets/imgs/IMG_ok 9966.jpg"



import { Carousel } from 'flowbite-react';

export function Hero() {
  return (
    <>
      {/* Background img/video */}
      <section className="min-h-screen flex justify-center items-center">
        <video className="min-h-screen w-[100%] h-[100%] object-cover hidden md:block absolute opacity-70" loop autoPlay muted>
            <source src={"video/video.mp4"} />
        </video>
        
      <Carousel className='md:hidden cursor-default'>
        <div className="relative flex items-center justify-center object-cover">
          <Image src={img1} alt="" className='object-cover min-h-screen w-[100%] h-[100%] opacity-70' />
        </div>
        <div className="relative flex items-center justify-center object-cover">
          <Image src={img2} alt="" className='object-cover min-h-screen w-[100%] h-[100%] opacity-70' />
        </div>
        <div className="relative flex items-center justify-center object-cover">
          <Image src={img3} alt="" className='object-cover min-h-screen w-[100%] h-[100%] opacity-70' />
        </div>
        <div className="relative flex items-center justify-center object-cover">
          <Image src={img4} alt="" className='object-cover min-h-screen w-[100%] h-[100%] opacity-70' />
        </div>
        <div className="relative flex items-center justify-center object-cover">
          <Image src={img5} alt="" className='object-cover min-h-screen w-[100%] h-[100%] opacity-70' />
        </div>
        <div className="relative flex items-center justify-center object-cover">
          <Image src={img6} alt="" className='object-cover min-h-screen w-[100%] h-[100%] opacity-70' />
        </div>
        <div className="relative flex items-center justify-center object-cover">
          <Image src={img7} alt="" className='object-cover min-h-screen w-[100%] h-[100%] opacity-70' />
        </div>


      </Carousel>


        {/* Texts */}
        <div className="mx-8 md:mx-48 absolute">
          <h1 className="text-4xl md:text-6xl font-bold relative text-white text-center drop-shadow-md shadow-black">Esteves Imóveis</h1>
          <br />
          <p className="relative text-white text-center drop-shadow-md shadow-black">
          Encontre o seu lar e os melhores investimentos imobiliários em Canavieiras-Ba. Estamos há mais de 11 anos realizando sonhos de morar bem!
          </p>
        </div>
      </section>
    </>



 

  )
}
