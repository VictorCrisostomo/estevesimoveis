'use client'
import Image from 'next/image';

import Navbar from "@/components/navbar/Index"
import { Infos } from '@/components/Infos/Index';
import { Description } from "@/components/description/Index";
import { Ajuda } from "@/components/Ajuda";
import { Footer } from "@/components/Footer";

export default function C08() {
  return (
    <main className="bg-zinc-50 text-zinc-600">
      {/* navbar */}
      <Navbar />
      
      {/* Infos */}
      <Infos.Header
        house='Casa'
        referencia='C-08'
        endereco='Rua Barão de Cotegipe, nº528 - Centro'
        compartilhar=''
      />
      <Infos.Caroussel>
      <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c08/c01.jpg)]  bg-center bg-cover" />
        </Infos.Image>
      <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c08/c02.jpg)]  bg-center bg-cover" />
        </Infos.Image>
      <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c08/c03.jpg)]  bg-center bg-cover" />
        </Infos.Image>
      <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c08/c04.jpg)]  bg-center bg-cover" />
        </Infos.Image>
      <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c08/c05.jpg)]  bg-center bg-cover" />
        </Infos.Image>
      <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c08/c06.jpg)]  bg-center bg-cover" />
        </Infos.Image>
      <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c08/c07.jpg)]  bg-center bg-cover" />
        </Infos.Image>
      <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c08/c08.jpg)]  bg-center bg-cover" />
        </Infos.Image>
      <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c08/c09.jpg)]  bg-center bg-cover" />
        </Infos.Image>
      <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c08/c10.jpg)]  bg-center bg-cover" />
        </Infos.Image>
      </Infos.Caroussel>
      <Infos.Hero
        valor='320.000,000'
        dormitorios='2'
        vagas='2'
        area='84,00'
      />

      {/* descrição */}
      <Description.Video url='https://www.youtube.com/embed/3-3EoXCtd7A?si=2zktz70l3kNIIkLu' />
      <Description.Root>
        <Description.Text descricao='Casa com jardim, garagem, sala, cozinha, área de serviço, área gourmet, 02 quartos sendo 01 suíte, escritório, 02 banheiros sociais'>
          <Description.Area terreno='171,00' construcao='84,00' />
        </Description.Text>
        <Description.Card valor='320.000,000' />
      </Description.Root>

      {/* Falar com o corretor */}
      <Ajuda />
      
      {/* footer */}
      <Footer />
    </main>
  )
}