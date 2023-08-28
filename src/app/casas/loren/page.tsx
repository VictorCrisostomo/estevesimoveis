'use client'
import Image from 'next/image';

import Navbar from "@/components/navbar/Index"


import { Ajuda } from "@/components/Ajuda";
import { Footer } from "@/components/Footer";
import { Description } from "@/components/layout/Description";

import { Infos } from '@/components/Infos/Index';

import casa from './imgs/casa.jpg'



export default function Casa() {
  return (
    <main className="bg-zinc-50 text-zinc-600">
      {/* navbar */}
      <Navbar />

      {/* Infos */}
      <Infos.Header
        house=''
        referencia=''
        endereco=''
        compartilhar=''
      />

      <Infos.Caroussel>
        <Infos.Image>
          <Image src={casa} alt='' />
        </Infos.Image>
      </Infos.Caroussel>
      
      <Infos.Hero
        valor=''
        dormitorios=''
        vagas=''
        area=''
      />
      {/* descrição */}
      <Description />

      {/* Falar com o corretor */}
      <Ajuda />
      
      {/* footer */}
      <Footer />
    </main>
  )
}