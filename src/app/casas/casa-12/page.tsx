'use client'
import Image from 'next/image';

import Navbar from "@/components/navbar/Index"
import { Infos } from '@/components/Infos/Index';
import { Description } from "@/components/description/Index";
import { Ajuda } from "@/components/Ajuda";
import { Footer } from "@/components/Footer";

export default function C12() {
  return (
    <main className="bg-zinc-50 text-zinc-600">
      {/* navbar */}
      <Navbar />
      
      {/* Infos */}
      <Infos.Header
        house='Casa'
        referencia='C-12'
        endereco='Tv. Ilha Náutica, S/N - Ilha de Atalaia'
        compartilhar=''
      />
      <Infos.Caroussel>
      <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c12/c01.jpg)]  bg-center bg-cover" />
        </Infos.Image>
      <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c12/c02.jpg)]  bg-center bg-cover" />
        </Infos.Image>
      <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c12/c03.jpg)]  bg-center bg-cover" />
        </Infos.Image>
      <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c12/c04.jpg)]  bg-center bg-cover" />
        </Infos.Image>
      <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c12/c05.jpg)]  bg-center bg-cover" />
        </Infos.Image>
      <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c12/c06.jpg)]  bg-center bg-cover" />
        </Infos.Image>
      <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c12/c07.jpg)]  bg-center bg-cover" />
        </Infos.Image>
      <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c12/c08.jpg)]  bg-center bg-cover" />
        </Infos.Image>
      <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c12/c09.jpg)]  bg-center bg-cover" />
        </Infos.Image>
      <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c12/c10.jpg)]  bg-center bg-cover" />
        </Infos.Image>
      </Infos.Caroussel>
      <Infos.Hero
        valor='280.000,000'
        dormitorios='2'
        vagas='1'
        area='120,00'
      />

      {/* descrição */}
      <Description.Video url='https://www.youtube.com/embed/bH5Khy_gfSk?si=-jAE8CxOy8OCBTAg' />
      <Description.Root>
        <Description.Text descricao='Piscina, garagem, varanda, 01 quarto, 01 suíte, sala ampla, cozinha e área de serviço.'>
          <Description.Area terreno='300,00' construcao='120,00' />
        </Description.Text>
        <Description.Card valor='280.000,000' />
      </Description.Root>

      {/* Falar com o corretor */}
      <Ajuda />
      
      {/* footer */}
      <Footer />
    </main>
  )
}