import Image from 'next/image';

import contact from "@/assets/undraw_mobile_marketing_re_p77p.svg"
import whatsapp from "@/assets/whatsapp.png"

import Navbar from "@/components/navbar/Index";
import { Bed, Facebook, Instagram, Mail, Phone } from 'lucide-react';
import { Footer } from '@/components/Footer';

export default function Contato() {
  return (
    <main className="text-zinc-600">
      <Navbar />
      <div className="mx-5 md:mx-32 my-8 flex flex-col justify-center">
        <p className="text-2xl font-semibold text-center text-zinc-700">Lorem Ipsun</p>
        <br />
        <p className="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam ad nemo dolor molestiae explicabo, et harum odit accusantium ratione voluptas impedit nulla magni nam perspiciatis? Soluta delectus dicta ratione natus.</p>
      </div>

      <div className="md:mx-32 md:my-16 grid grid-cols-1 md:grid-cols-2 justify-items-center items-center gap-10 md:gap-0">
        <div className="flex flex-col justify-center gap-5">

          <div className="flex items-center gap-2">
              <div className="bg-zinc-300 rounded-full px-2 py-2">
                <Phone className="text-zinc-500" />
              </div>
              <div className="">
                <a href="tel:+557332843789" rel="noopener noreferrer">
                  <p className="text-zinc-700 font-semibold">(73) 3284-3789</p>
                </a>
              </div>
          </div>
          <div className="flex items-center gap-2">
              <div className="bg-zinc-300 rounded-full px-2 py-2">
                <Image src={whatsapp} alt='' className='w-6' />
              </div>
              <div className="">
                <a href="https://web.whatsapp.com/send?phone=5573999973057&text=Ol%C3%A1.%20Estou%20visitando%20o%20site." rel="noopener noreferrer">
                  <p className="text-zinc-700 font-semibold">(73) 9 9997-3057</p>
                </a>
              </div>
          </div>
          <hr className="border-zinc-500"/>
          <div className="flex items-center gap-2">
              <div className="bg-zinc-300 rounded-full px-2 py-2">
                <Instagram className="text-zinc-500" />
              </div>
              <div className="">
                <a href="https://www.instagram.com/estevesimoveis/" target="_blank" rel="noopener noreferrer">
                  <p className="text-zinc-700 font-semibold">@estevesimoveis</p>
                </a>
              </div>
          </div>
          <div className="flex items-center gap-2">
              <div className="bg-zinc-300 rounded-full px-2 py-2">
                <Facebook className="text-zinc-500" />
              </div>
              <div className="">
                <a href="https://www.facebook.com/estevesimoveis" target="_blank" rel="noopener noreferrer">
                  <p className="text-zinc-700 font-semibold">Esteves Imóveis</p>
                </a>
              </div>
          </div>
          <div className="flex items-center gap-2">
              <div className="bg-zinc-300 rounded-full px-2 py-2">
                <Mail className="text-zinc-500" />
              </div>
              <div className="">
                <a href="malito:imobiliariaestevesimoveis@hotmail.com" target="_blank" rel="noopener noreferrer">
                  <p className="text-zinc-700 font-semibold">estevesimoveis@gmai.com</p>
                </a>
              </div>
          </div>
        </div>

        <div className="pb-8 md:pb-0 flex justify-center md:justify-start">
          <Image src={contact} alt="" className='w-[65%]' />
        </div>
      </div>
      <Footer />
    </main>
  )
}