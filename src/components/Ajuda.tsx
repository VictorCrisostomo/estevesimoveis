import { Building2, CircleDollarSign } from "lucide-react";

export function Ajuda() {
  return(
    <section className="bg-white">
    <div className="py-12">
      <h2 className="text-xl font-semibold text-center text-zinc-700">Precisa de ajuda?</h2>
    </div>
    <div className="flex items-center justify-center pb-16">
    <div className="grid grid-cols-2 justify-items-center gap-5">
      <div className="transition delay-150 hover:bg-zinc-200 duration-300 w-80 h-96 rounded-2xl drop-shadow-lg flex flex-col justify-center">
        <div className="mr-7 ml-7 justify-center grid grid-rows-3 items-center gap-2">
          <div className="flex justify-center">
            <CircleDollarSign className="w-20 h-20 text-indigo-700" />
          </div>
          <p className="text-xl font-semibold text-center text-zinc-700">Simulador de Crédito</p>
          <p className="text-base text-center">Faça uma simulação de crédito para a compra do seu novo imóvel.</p>
          <div className="flex justify-center">
            <button className="bg-indigo-700 hover:bg-indigo-500 text-white w-56 py-2 px-4 rounded text-base">Simular financiamento</button>
          </div>
        </div>
      </div>
      <div className="transition delay-150 hover:bg-zinc-200 duration-300 w-80 h-96 rounded-2xl drop-shadow-lg flex flex-col justify-center">
        <div className="mr-7 ml-7 justify-center grid grid-rows-3 items-center gap-2">
          <div className="flex justify-center">
            <Building2 className="w-20 h-20 text-indigo-700" />
          </div>
          <p className="text-xl font-semibold text-center text-zinc-700">Quer vender ou alugar?</p>
          <p className="text-base text-center">Está precisando vender ou alugar seu imóvel</p>
          <div className="flex justify-center">
            <button className="bg-indigo-700 hover:bg-indigo-500 text-white w-56 py-2 px-4 rounded text-base">Clique aqui</button>
          </div>
        </div>
      </div>
    </div>  
    </div>

  </section>
  )
}