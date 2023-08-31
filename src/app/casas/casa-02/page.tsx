import Navbar from "@/components/navbar/Index"
import { Infos } from '@/components/Infos/Index';
import { Description } from "@/components/description/Index";
import { Ajuda } from "@/components/Ajuda";
import { Footer } from "@/components/Footer";

export default function C02() {
  return (
    <main className="bg-zinc-50 text-zinc-600">
      {/* navbar */}
      <Navbar />
      
      {/* Infos */}
      <Infos.Header
        house='Casa'
        referencia='C-02'
        endereco='Rua General Pederneiras, nº229 - Centro'
        compartilhar=''
      />
      <Infos.Caroussel>
        <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c02/c01.jpg)]  bg-center bg-cover" />
        </Infos.Image>
        <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c02/c02.jpg)]  bg-center bg-cover" />
        </Infos.Image>
        <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c02/c03.jpg)]  bg-center bg-cover" />
        </Infos.Image>
        <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c02/c04.jpg)]  bg-center bg-cover" />
        </Infos.Image>
        <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c02/c05.jpg)]  bg-center bg-cover" />
        </Infos.Image>
        <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c02/c06.jpg)]  bg-center bg-cover" />
        </Infos.Image>
        <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c02/c07.jpg)]  bg-center bg-cover" />
        </Infos.Image>
        <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c02/c08.jpg)]  bg-center bg-cover" />
        </Infos.Image>
        <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c02/c09.jpg)]  bg-center bg-cover" />
        </Infos.Image>
        <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c02/c10.jpg)]  bg-center bg-cover" />
        </Infos.Image>
      </Infos.Caroussel>
      <Infos.Hero
        valor='1.800.000,00'
        dormitorios='4'
        vagas='3'
        area='359,10'
      />

      {/* descrição */}
      <Description.Video url='https://www.youtube.com/embed/1m8SjSiFYZE?si=AirR8RPzLhesvikO' />
      <Description.Root>
        <Description.Text descricao='Casa de alto padrão'>
          <Description.Area terreno='542,88' construcao='359,10' />
        </Description.Text>
        <Description.Card valor='1.800.000,00' />
      </Description.Root>

      {/* Falar com o corretor */}
      <Ajuda />
      
      {/* footer */}
      <Footer />
    </main>
  )
}