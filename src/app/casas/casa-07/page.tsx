'use client'
import Image from 'next/image';

import Navbar from "@/components/navbar/Index"
import { Infos } from '@/components/Infos/Index';
import { Description } from "@/components/description/Index";
import { Ajuda } from "@/components/Ajuda";
import { Footer } from "@/components/Footer";

export default function C07() {
  return (
    <main className="bg-zinc-50 text-zinc-600">
      {/* navbar */}
      <Navbar />
      
      {/* Infos */}
      <Infos.Header
        house='Casa'
        referencia='C-07'
        endereco='Rua Fidelina Barreto, nº350 - Tancredão'
        compartilhar=''
      />
      <Infos.Caroussel>
      <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c07/c01.jpg)]  bg-center bg-cover" />
        </Infos.Image>
      <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c07/c02.jpg)]  bg-center bg-cover" />
        </Infos.Image>
      <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c07/c03.jpg)]  bg-center bg-cover" />
        </Infos.Image>
      <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c07/c04.jpg)]  bg-center bg-cover" />
        </Infos.Image>
      <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c07/c05.jpg)]  bg-center bg-cover" />
        </Infos.Image>
      <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c07/c06.jpg)]  bg-center bg-cover" />
        </Infos.Image>
      <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c07/c07.jpg)]  bg-center bg-cover" />
        </Infos.Image>
      <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c07/c08.jpg)]  bg-center bg-cover" />
        </Infos.Image>
      <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c07/c09.jpg)]  bg-center bg-cover" />
        </Infos.Image>
      </Infos.Caroussel>
      <Infos.Hero
        valor='525.000,000'
        dormitorios='3'
        vagas='2'
        area='250,00'
      />

      {/* descrição */}
      <Description.Video url='https://www.youtube.com/embed/uAIuJpjkwEg?si=sODzE93htuZ6w6Fz' />
      <Description.Root>
        <Description.Text descricao='Sala de estar, sala de jantar com mesa de 8 lugares , cozinha, 1 banheiro social, 3 quartos sendo 1 quarto com escritório e 1 suíte com guarda roupa de casal, rack , TV e criado mudo, lavanderia, quiosque com jardim, garagem para até 4 carros.'>
          <Description.Area terreno='330,00' construcao='250,00' />
        </Description.Text>
        <Description.Card valor='525.000,000' />
      </Description.Root>

      {/* Falar com o corretor */}
      <Ajuda />
      
      {/* footer */}
      <Footer />
    </main>
  )
}