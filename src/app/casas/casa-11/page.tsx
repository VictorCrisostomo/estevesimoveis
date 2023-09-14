'use client'
import Image from 'next/image';

import Navbar from "@/components/navbar/Index"
import { Infos } from '@/components/Infos/Index';
import { Description } from "@/components/description/Index";
import { Ajuda } from "@/components/Ajuda";
import { Footer } from "@/components/Footer";

export default function C11() {
  return (
    <main className="bg-zinc-50 text-zinc-600">
      {/* navbar */}
      <Navbar />
      
      {/* Infos */}
      <Infos.Header
        house='Casa'
        referencia='C-11'
        endereco='Av. Otávio Mangabeira, nº1257 - Centro'
        compartilhar=''
      />
      <Infos.Caroussel>
      <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c11/c01.jpg)]  bg-center bg-cover" />
        </Infos.Image>
      <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c11/c02.jpg)]  bg-center bg-cover" />
        </Infos.Image>
      <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c11/c03.jpg)]  bg-center bg-cover" />
        </Infos.Image>
      <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c11/c04.jpg)]  bg-center bg-cover" />
        </Infos.Image>
      <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c11/c05.jpg)]  bg-center bg-cover" />
        </Infos.Image>
      <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c11/c06.jpg)]  bg-center bg-cover" />
        </Infos.Image>
      <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c11/c07.jpg)]  bg-center bg-cover" />
        </Infos.Image>
      <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c11/c08.jpg)]  bg-center bg-cover" />
        </Infos.Image>
      <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c11/c09.jpg)]  bg-center bg-cover" />
        </Infos.Image>
      <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c11/c10.jpg)]  bg-center bg-cover" />
        </Infos.Image>
      </Infos.Caroussel>
      <Infos.Hero
        valor='380.000,000'
        dormitorios='3'
        vagas='2'
        area='185,90'
      />

      {/* descrição */}
      <Description.Video url='https://www.youtube.com/embed/aWk8sUA3y_I?si=H29nH0dz6otcp-6w' />
      <Description.Root>
        <Description.Text descricao='2 varandas, 01 sala, 03 suítes, 01 cozinha, 01 área de serviço, 01 banheiro social, 01 dependência de empregada com banheiro, quintal, garagem.'>
          <Description.Area terreno='611,22' construcao='185,90' />
        </Description.Text>
        <Description.Card valor='380.000,000' />
      </Description.Root>

      {/* Falar com o corretor */}
      <Ajuda />
      
      {/* footer */}
      <Footer />
    </main>
  )
}