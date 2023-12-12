import Link from "next/link"
import Image from 'next/image';

import casa from "@/assets/imgs-cards/c02.jpg"
import comercial from "@/assets/imgs-cards/IMG_7681-min.jpg"
import terreno from "@/assets/imgs-cards/DJI_k 0100-min.jpg"

export function Cards() {
  return (
    <>          
      <div className="relative flex gap-6 snap-x overflow-x-auto scrollCards">

        <div className="snap-center shrink-0 first:pl-8 last:pr-8">
          <Link href={"./casas"}>
            <div className="snap-start rounded-2xl drop-shadow-lg">
              <div className="w-48 h-44 rounded-t-xl relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                <Image src={casa} alt='' quality={60} className="max-w-xs transition duration-300 ease-in-out hover:scale-110" />
              </div>
              <div className="w-48 h-16 bg-zinc-100 rounded-b-xl">
                <p className="ml-5 pt-2 text-base">Imóveis <br/>Residenciais</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="snap-center shrink-0 first:pl-8 last:pr-8">
          <Link href={"./imoveis-comercial"}>
            <div className="snap-start rounded-2xl drop-shadow-lg">
            <div className="w-48 h-44 rounded-t-xl relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                <Image src={comercial} quality={60} alt='' className="max-w-xs transition duration-300 ease-in-out hover:scale-110" />
              </div>
              <div className="w-48 h-16 bg-zinc-100 rounded-b-xl">
                <p className="px-5 pt-2 text-base">Imóveis comerciais</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="snap-center shrink-0 first:pl-8 last:pr-8">
          <Link href={"./terrenos"}>
            <div className="snap-start w-48 h-60 rounded-2xl drop-shadow-lg">
            <div className="w-48 h-44 rounded-t-xl relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                <Image src={terreno} quality={60} alt='' className="max-w-xs transition duration-300 ease-in-out hover:scale-110" />
              </div>
              <div className="w-48 h-16 bg-zinc-100 rounded-b-xl">
                <p className="ml-5 pt-2 text-base">Terrenos</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="snap-center shrink-0 first:pl-8 last:pr-8">
          <Link href={"./buscar-imoveis"}>
            <div className="snap-start w-48 h-60 rounded-2xl bg-zinc-100 flex items-center justify-center drop-shadow-lg">
              <p className="p-2 text-lg text-center">Ver todos os imóveis disponíveis.</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}
