'use client'
import Image from 'next/image';

import Navbar from "@/components/navbar/Index"
import { Infos } from '@/components/Infos/Index';
import { Description } from "@/components/description/Index";
import { Ajuda } from "@/components/Ajuda";
import { Footer } from "@/components/Footer";

// import casa from './imgs/casa.jpg'

export default function C01() {
  return (
    <main className="bg-zinc-50 text-zinc-600">
      {/* navbar */}
      <Navbar />
      
      {/* Infos */}
      <Infos.Header
        house='Casa'
        referencia='C-01'
        endereco='Rua Edmundo Lopes de Castro, nº367 - Birindiba'
        compartilhar=''
      />
      <Infos.Caroussel>
        <Infos.Image>
          {/* <Image src={casa} alt='' /> */}
        </Infos.Image>
      </Infos.Caroussel>
      <Infos.Hero
        valor='350.000,000'
        dormitorios='3'
        vagas='2'
        area='129,42'
      />

      {/* descrição */}
      <Description.Video url='https://www.youtube.com/embed/3VZFpwlXKpg' />
      <Description.Root>
        <Description.Text descricao='Imóvel residencial com a seguinte conformação 10,70m de frente por 10,60m de fundo por 22,30m de um lado e 22,00m do outro lado, perfazendo uma área total de 235,90m² tendo uma área construída de 129,42m² com a seguinte descrição: 02 salas, 01 suíte, 02 quartos, 01 sanitario, 01 cozinha, 01 garagem'>
          <Description.Area terreno='235,90m²' construcao='129,42m²' />
        </Description.Text>
        <Description.Card valor='350.000,000' />
      </Description.Root>

      {/* Falar com o corretor */}
      <Ajuda />
      
      {/* footer */}
      <Footer />
    </main>
  )
}