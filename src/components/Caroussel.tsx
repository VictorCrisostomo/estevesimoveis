'use client';

import { Carousel } from 'flowbite-react';

export function Caroussel() {
  return (
    <Carousel>
      <div className="relative flex items-center justify-center min-w-screen h-44 md:h-80 bg-[url(../assets/banner.jpg)] bg-cover bg-center"/>
      <div className="relative flex items-center justify-center min-w-screen h-44 md:h-80 bg-[url(../assets/banner.jpg)] bg-cover bg-center"/>
      <div className="relative flex items-center justify-center min-w-screen h-44 md:h-80 bg-[url(../assets/banner.jpg)] bg-cover bg-center"/>
      <div className="relative flex items-center justify-center min-w-screen h-44 md:h-80 bg-[url(../assets/banner.jpg)] bg-cover bg-center"/>
    </Carousel>
  )
}


