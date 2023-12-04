'use client';

import { Carousel } from 'flowbite-react';
import Image from 'next/image';

import img1 from "@/assets/imgs/img1.jpg"
import img2 from "@/assets/imgs/img2.jpg"
import img3 from "@/assets/imgs/img3.jpg"
import img4 from "@/assets/imgs/img4.jpg"
import img5 from "@/assets/imgs/img5.jpg"
import img6 from "@/assets/imgs/img6.jpg"
import img7 from "@/assets/imgs/img7.jpg"
import img8 from "@/assets/imgs/img8.jpg"

export function Hero() {
  return (
    <>
      {/* Background img/video */}
      <section className="min-h-screen flex justify-center items-center">
        <video className="min-h-screen w-[100%] h-[100%] object-cover hidden md:block absolute" loop autoPlay muted>
            <source src={"video/video.mp4"} />
        </video>
        
      <Carousel className='md:hidden cursor-default'>
        <div className="relative">
          <Image src={img1} quality={70} alt="" className='object-cover min-h-screen w-[100%] h-[100%]' />
        </div>
        <div className="relative">
          <Image src={img2} quality={70} alt="" className='object-cover min-h-screen w-[100%] h-[100%]' />
        </div>
        <div className="relative">
          <Image src={img3} quality={70} alt="" className='object-cover min-h-screen w-[100%] h-[100%]' />
        </div>
        <div className="relative">
          <Image src={img4} quality={70} alt="" className='object-cover min-h-screen w-[100%] h-[100%]' />
        </div>
        <div className="relative">
          <Image src={img5} quality={70} alt="" className='object-cover min-h-screen w-[100%] h-[100%]' />
        </div>
        <div className="relative">
          <Image src={img6} quality={70} alt="" className='object-cover min-h-screen w-[100%] h-[100%]' />
        </div>
        <div className="relative">
          <Image src={img7} quality={70} alt="" className='object-cover min-h-screen w-[100%] h-[100%]' />
        </div>
        <div className="relative">
          <Image src={img8} quality={70} alt="" className='object-cover min-h-screen w-[100%] h-[100%]' />
        </div>
      </Carousel>

      <div className="absolute bg-black opacity-40 min-h-screen w-[100%] h-[100%]"/>


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
