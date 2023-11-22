
import Link from "next/link"


export function Cards() {
  return (
    <>          
      <div className="relative flex gap-6 snap-x overflow-x-auto scrollCards">

        <div className="snap-center shrink-0 first:pl-8 last:pr-8">
          <Link href={"./casas"}>
            <div className="snap-start w-48 h-60 rounded-2xl drop-shadow-lg">
              <div className="w-48 h-40 bg-red-700 rounded-t-xl"></div>
              <div className="w-48 h-20 bg-zinc-100 rounded-b-xl">
                <p className="ml-5 pt-3 text-lg">Casas</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="snap-center shrink-0 first:pl-8 last:pr-8">
          <Link href={"./aluguel-de-imoveis"}>
            <div className="snap-start w-48 h-60 rounded-2xl drop-shadow-lg">
              <div className="w-48 h-40 bg-blue-700 rounded-t-xl"></div>
              <div className="w-48 h-20 bg-zinc-100 rounded-b-xl">
                <p className="px-5 pt-3 text-lg">Aluguel de Imóveis</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="snap-center shrink-0 first:pl-8 last:pr-8">
          <Link href={"./terrenos"}>
            <div className="snap-start w-48 h-60 rounded-2xl drop-shadow-lg">
              <div className="w-48 h-40 bg-slate-700 rounded-t-xl"></div>
              <div className="w-48 h-20 bg-zinc-100 rounded-b-xl">
                <p className="ml-5 pt-3 text-lg">Terrenos</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="snap-center shrink-0 first:pl-8 last:pr-8">
          <Link href={"./imoveis-rurais"}>
            <div className="snap-start w-48 h-60 rounded-2xl drop-shadow-lg">
              <div className="w-48 h-40 bg-orange-800 rounded-t-xl"></div>
              <div className="w-48 h-20 bg-zinc-100 rounded-b-xl">
                <p className="ml-5 pt-3 text-lg">Imóveis Rurais</p>
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
