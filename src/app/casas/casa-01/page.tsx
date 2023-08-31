import Navbar from "@/components/navbar/Index"
import { Infos } from '@/components/Infos/Index';
import { Description } from "@/components/description/Index";
import { Ajuda } from "@/components/Ajuda";
import { Footer } from "@/components/Footer";

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
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c01/c01.jpg)]  bg-center bg-cover" />
        </Infos.Image>
        <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c01/c02.jpg)]  bg-center bg-cover" />
        </Infos.Image>
        <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c01/c03.jpg)]  bg-center bg-cover" />
        </Infos.Image>
        <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c01/c04.jpg)]  bg-center bg-cover" />
        </Infos.Image>
        <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c01/c05.jpg)]  bg-center bg-cover" />
        </Infos.Image>
        <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c01/c06.jpg)]  bg-center bg-cover" />
        </Infos.Image>
        <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c01/c07.jpg)]  bg-center bg-cover" />
        </Infos.Image>
        <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c01/c08.jpg)]  bg-center bg-cover" />
        </Infos.Image>
        <Infos.Image>
          <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-[url(../assets/c01/c09.jpg)]  bg-center bg-cover" />
        </Infos.Image>
      </Infos.Caroussel>
      <Infos.Hero
        valor='350.000,00'
        dormitorios='3'
        vagas='2'
        area='129,42'
      />

      {/* descrição */}
      <Description.Video url='https://www.youtube.com/embed/1m8SjSiFYZE?si=AirR8RPzLhesvikO' />
      <Description.Root>
        <Description.Text descricao='Imóvel residencial com a seguinte conformação 10,70m de frente por 10,60m de fundo por 22,30m de um lado e 22,00m do outro lado, perfazendo uma área total de 235,90m² tendo uma área construída de 129,42m² com a seguinte descrição: 02 salas, 01 suíte, 02 quartos, 01 sanitario, 01 cozinha, 01 garagem'>
          <Description.Area terreno='235,90m²' construcao='129,42m²' />
        </Description.Text>
        <Description.Card valor='350.000,00' />
      </Description.Root>

      {/* Falar com o corretor */}
      <Ajuda />
      
      {/* footer */}
      <Footer />
    </main>
  )
}