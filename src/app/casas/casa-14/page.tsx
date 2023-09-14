'use client'
import Image from 'next/image';

import Navbar from "@/components/navbar/Index"
import { Infos } from '@/components/Infos/Index';
import { Description } from "@/components/description/Index";
import { Ajuda } from "@/components/Ajuda";
import { Footer } from "@/components/Footer";

export default function C14() {
  return (
    <main className="bg-zinc-50 text-zinc-600">
      {/* navbar */}
      <Navbar />
      
      {/* Infos */}
      <Infos.Header
        house='Casa'
        referencia='C-14'
        endereco='Av. Otávio Mangabeira, nº791 - Centro'
        compartilhar=''
      />
      <Infos.Caroussel>
      <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c14/c01.jpg)]  bg-center bg-cover" />
        </Infos.Image>
      <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c14/c02.jpg)]  bg-center bg-cover" />
        </Infos.Image>
      <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c14/c03.jpg)]  bg-center bg-cover" />
        </Infos.Image>
      <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c14/c04.jpg)]  bg-center bg-cover" />
        </Infos.Image>
      <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c14/c05.jpg)]  bg-center bg-cover" />
        </Infos.Image>
      <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c14/c06.jpg)]  bg-center bg-cover" />
        </Infos.Image>
      <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c14/c07.jpg)]  bg-center bg-cover" />
        </Infos.Image>
      <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c14/c08.jpg)]  bg-center bg-cover" />
        </Infos.Image>
      <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c14/c09.jpg)]  bg-center bg-cover" />
        </Infos.Image>
      <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c14/c10.jpg)]  bg-center bg-cover" />
        </Infos.Image>
      </Infos.Caroussel>
      <Infos.Hero
        valor='409.000,00'
        dormitorios='3'
        vagas='1'
        area='192,02'
      />

      {/* descrição */}
      <Description.Video url='' />
      <Description.Root>
        <Description.Text descricao='Na parte térrea uma área para ponto comercial/ garagem ou outro investimento. NA PARTE SUPERIOR: Varanda, 02 salas, 01 suíte, closet, 01 banheiro social, cozinha, área de serviço.'>
          <Description.Area terreno='240,00' construcao='192,02' />
        </Description.Text>
        <Description.Card valor='409.000,00' />
      </Description.Root>

      {/* Falar com o corretor */}
      <Ajuda />
      
      {/* footer */}
      <Footer />
    </main>
  )
}