import Navbar from "@/components/navbar/Index"
import { Infos } from '@/components/Infos/Index';
import { Description } from "@/components/description/Index";
import { Ajuda } from "@/components/Ajuda";
import { Footer } from "@/components/Footer";

export default function C03() {
  return (
    <main className="bg-zinc-50 text-zinc-600">
      {/* navbar */}
      <Navbar />
      
      {/* Infos */}
      <Infos.Header
        house='Casa'
        referencia='C-03'
        endereco='Av. Cel. Augusto L. de Carvalho, nº439'
        compartilhar=''
      />
      <Infos.Caroussel>
        <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c03/c01.jpg)]  bg-center bg-cover" />
        </Infos.Image>
        <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c03/c02.jpg)]  bg-center bg-cover" />
        </Infos.Image>
        <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c03/c03.jpg)]  bg-center bg-cover" />
        </Infos.Image>
        <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c03/c04.jpg)]  bg-center bg-cover" />
        </Infos.Image>
        <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c03/c05.jpg)]  bg-center bg-cover" />
        </Infos.Image>
        <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c03/c06.jpg)]  bg-center bg-cover" />
        </Infos.Image>
        <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c03/c07.jpg)]  bg-center bg-cover" />
        </Infos.Image>
        <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c03/c08.jpg)]  bg-center bg-cover" />
        </Infos.Image>
        <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c03/c09.jpg)]  bg-center bg-cover" />
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