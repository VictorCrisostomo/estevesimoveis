import Image from "next/image";

import Navbar from "@/components/navbar/Index"
import { Infos } from '@/components/Infos/Index';
import { Description } from "@/components/description/Index";
import { Ajuda } from "@/components/Ajuda";
import { Footer } from "@/components/Footer";

import c01 from "@/assets/c03/c01.jpg"
import c02 from "@/assets/c03/c02.jpg"
import c03 from "@/assets/c03/c03.jpg"
import c04 from "@/assets/c03/c04.jpg"
import c05 from "@/assets/c03/c05.jpg"
import c06 from "@/assets/c03/c06.jpg"
import c07 from "@/assets/c03/c07.jpg"
import c08 from "@/assets/c03/c08.jpg"
import c09 from "@/assets/c03/c09.jpg"


export default function EI21() {
  return (
    <main className="bg-zinc-50 text-zinc-600">
      {/* navbar */}
      <Navbar />
      
      {/* Infos */}
      <Infos.Header
        house='Casa'
        referencia='ei-21'
        endereco='AV CORONEL AUGUSTO LUIS - SITIO HISTÓRICO'
        compartilhar=''
      />
      <Infos.Caroussel>
        <Infos.Image>
          <Image src={c01} quality={90} alt="" className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-center bg-cover" />
        </Infos.Image>
        <Infos.Image>
          <Image src={c02} quality={90} alt="" className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-center bg-cover" />
        </Infos.Image>
        <Infos.Image>
          <Image src={c03} quality={90} alt="" className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-center bg-cover" />
        </Infos.Image>
        <Infos.Image>
          <Image src={c04} quality={90} alt="" className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-center bg-cover" />
        </Infos.Image>
        <Infos.Image>
          <Image src={c05} quality={90} alt="" className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-center bg-cover" />
        </Infos.Image>
        <Infos.Image>
          <Image src={c06} quality={90} alt="" className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-center bg-cover" />
        </Infos.Image>
        <Infos.Image>
          <Image src={c07} quality={90} alt="" className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-center bg-cover" />
        </Infos.Image>
        <Infos.Image>
          <Image src={c08} quality={90} alt="" className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-center bg-cover" />
        </Infos.Image>
        <Infos.Image>
          <Image src={c09} quality={90} alt="" className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-center bg-cover" />
        </Infos.Image>
        
      </Infos.Caroussel>
      <Infos.Hero
        valor='2.000.000,00'
        dormitorios='7'
        vagas='4'
        area='394,77'
      />

      {/* descrição */}
      <Description.Video url='https://www.youtube.com/embed/0Z434xbIubo?si=SZercvuj5mWa0ciq' />
      <Description.Root>
        <Description.Text descricao='Casa de alto padrão'>
          <Description.Area terreno='1.161,80' construcao='394,77' />
        </Description.Text>
        <Description.Card valor='2.000.000,00' />
      </Description.Root>

      {/* Falar com o corretor */}
      <Ajuda />
      
      {/* footer */}
      <Footer />
    </main>
  )
}