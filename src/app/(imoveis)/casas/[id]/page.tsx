import Image from "next/image";

import Navbar from "@/components/navbar/Index"
import { Infos } from '@/components/Infos/Index';
import { Description } from "@/components/description/Index";
import { Ajuda } from "@/components/Ajuda";
import { Footer } from "@/components/Footer";

export interface Imovel {
  id: number
  codigo: string
  tipo: string
  categoria: string
  bairro: string
  endereco: string
  numero: string
  terreno: string
  construcao: string
  dormitorios: string
  vagas: string
  valor: string
  descricao: string
  images: string
  url: {
    videoLink: string
  }
}

async function getImovel(id: string): Promise<Imovel> {
  const res = await fetch(`https://imoveis-db.vercel.app/casas/${id}`)
  
  if (!res.ok) {
    throw new Error("Falha ao carregar")
  }

  const data = await res.json()
  return data
}

export async function generateMetadata(
  {
    params: { id },
    }: {
      params: { id: string },
    }
) {
  const imovel = await getImovel(id)
  const url: string = 'https://esteves-db.vercel.app'

  return {
    title: `${imovel.tipo} - ${imovel.bairro} | ${imovel.codigo}`,
    description: `${imovel.endereco} - ${imovel.numero}`,
    openGraph: {
      images: `${url}${imovel.images[1]}`
    }
  }
}



export default async function Casa(
  {
    params: { id },
    }: {
      params: { id: string },
    }
) {
  const imovel = await getImovel(id)
  const url: string = 'https://esteves-db.vercel.app'

  return (
    <main className="bg-zinc-50 text-zinc-600">
      {/* navbar */}
      <Navbar />
      
      {/* Infos */}
      <Infos.Header
        house={imovel.tipo}
        referencia={imovel.codigo}
        endereco={`${imovel.endereco}, nº${imovel.numero} - ${imovel.bairro}`}
        compartilhar=''
      />
      <Infos.Caroussel>
        <Infos.Image className="relative w-[390px] h-[293px] md:w-[510px] md:h-96">
          <Image src={`${url}${imovel.images[1]}`} quality={90} fill alt="" className="snap-start bg-cover" />
        </Infos.Image>
        <Infos.Image className="relative w-[390px] h-[293px] md:w-[510px] md:h-96">
          <Image src={`${url}${imovel.images[2]}`} quality={90} fill alt="" className="snap-start bg-center bg-cover" />
        </Infos.Image>
        <Infos.Image className="relative w-[390px] h-[293px] md:w-[510px] md:h-96">
          <Image src={`${url}${imovel.images[3]}`} quality={90} fill alt="" className="snap-start bg-center bg-cover" />
        </Infos.Image>
        <Infos.Image className="relative w-[390px] h-[293px] md:w-[510px] md:h-96">
          <Image src={`${url}${imovel.images[4]}`} quality={90} fill alt="" className="snap-start bg-center bg-cover" />
        </Infos.Image>
        <Infos.Image className="relative w-[390px] h-[293px] md:w-[510px] md:h-96">
          <Image src={`${url}${imovel.images[5]}`} quality={90} fill alt="" className="snap-start bg-center bg-cover" />
        </Infos.Image>
        <Infos.Image className="relative w-[390px] h-[293px] md:w-[510px] md:h-96">
          <Image src={`${url}${imovel.images[6]}`} quality={90} fill alt="" className="snap-start bg-center bg-cover" />
        </Infos.Image>
        <Infos.Image className="relative w-[390px] h-[293px] md:w-[510px] md:h-96">
          <Image src={`${url}${imovel.images[7]}`} quality={90} fill alt="" className="snap-start bg-center bg-cover" />
        </Infos.Image>
        
      </Infos.Caroussel>
      <Infos.Hero
        valor={imovel.valor}
        dormitorios={imovel.dormitorios}
        vagas={imovel.vagas}
        area={imovel.terreno}
      />

      {/* descrição */}
      <Description.Video url={imovel.url.videoLink} />
      <Description.Root>
        <Description.Text descricao={imovel.descricao}>
          <Description.Area
            terreno={imovel.terreno}
            construcao={imovel.construcao}
            />
        </Description.Text>
        <Description.Card
          valor={imovel.valor}
          informacao=""
          />
      </Description.Root>

      {/* Falar com o corretor */}
      <Ajuda />
      
      {/* footer */}
      <Footer />
    </main>
  )
}