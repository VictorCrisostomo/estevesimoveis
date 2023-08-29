'use client'
import Image from 'next/image';

import Navbar from "@/components/navbar/Index"
import { Infos } from '@/components/Infos/Index';
import { Description } from "@/components/description/Index";
import { Ajuda } from "@/components/Ajuda";
import { Footer } from "@/components/Footer";

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
      <Description.Video url='https://www.youtube.com/embed/3VZFpwlXKpg' />
      <Description.Root>
        <Description.Text descricao=''>
          <Description.Area terreno='' construcao='' />
        </Description.Text>
        <Description.Card valor='' />
      </Description.Root>

      {/* Falar com o corretor */}
      <Ajuda />
      
      {/* footer */}
      <Footer />
    </main>
  )
}