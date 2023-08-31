import { Building2, CircleDollarSign } from "lucide-react";
import { SimulacaoModals } from "./SimulacaoModals";

export function Ajuda() {
  return(
    <section className="bg-white">
    <div className="py-8">
      <h2 className="text-xl font-semibold text-center text-zinc-700">Precisa de ajuda?</h2>
    </div>

    <div className="flex items-center justify-center pb-8 gap-10">
      <div className="grid md:grid-cols-2 justify-items-center gap-5">
        <div className="transition delay-150 hover:bg-zinc-200 duration-300 w-64 h-80 rounded-2xl drop-shadow-lg flex flex-col justify-center">
          <div className="mx-7 justify-center grid grid-rows-3 items-center gap-2">
            <div className="flex justify-center">
              <CircleDollarSign className="w-16 h-16 text-indigo-700" />
            </div>
            <p className="text-lg font-semibold text-center text-zinc-700">Simulador de Crédito</p>
            <p className="text-sm text-center">Faça uma simulação de crédito para a compra do seu novo imóvel.</p>
            <div className="flex justify-center">
              <SimulacaoModals />
              {/* <button className="bg-indigo-700 hover:bg-indigo-500 text-white py-2 px-4 rounded text-xs">Simular financiamento</button> */}
            </div>
          </div>
        </div>
        <div className="transition delay-150 hover:bg-zinc-200 duration-300 w-64 h-80 rounded-2xl drop-shadow-lg flex flex-col justify-center">
          <div className="mx-7 justify-center grid grid-rows-3 items-center gap-2">
            <div className="flex justify-center">
              <Building2 className="w-16 h-16 text-indigo-700" />
            </div>
            <p className="text-lg font-semibold text-center text-zinc-700">Quer vender ou alugar?</p>
            <p className="text-sm text-center">Precisando vender ou alugar o seu Imóvel?</p>
            <div className="flex justify-center">
              <button className="bg-indigo-700 hover:bg-indigo-500 text-white py-2 px-4 rounded text-xs">Clique aqui</button>
            </div>
          </div>
        </div>
      </div>  
    </div>

  </section>
  )
}