import Image from 'next/image';

import imgbg from "@/assets/IMG_ok 0010.jpg"

export function Hero() {
  return (
    <>
      {/* Background img/video */}
      <section className="min-h-screen flex justify-center items-center">
        <video className="min-h-screen w-[100%] h-[100%] object-cover hidden md:block absolute opacity-70" loop autoPlay muted>
            <source src={"video/video.mp4"} />
        </video>
        <Image src={imgbg} alt="" className='object-cover "min-h-screen w-[100%] h-[100%] absolute md:hidden opacity-70' />
        
        {/* Texts */}
        <div className="mx-8 md:mx-48">
          <h1 className="text-4xl md:text-6xl font-bold relative text-white text-center drop-shadow-lg shadow-black">Esteves Imóveis</h1>
          <br />
          <p className="relative text-white text-center drop-shadow-lg shadow-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, saepe. Exercitationem molestiae magni est, consectetur expedita inventore sit dolore accusantium laboriosam optio quae cupiditate minima quidem perferendis non, illum praesentium.
          </p>
        </div>
      </section>
    </>





  )
}
