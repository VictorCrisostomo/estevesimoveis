

export function SitiosGroup() {
  return(
    <section className="py-10 md:px-24 md:py-20">
      <div className="mx-6">
        <p className="text-zinc-800 text-xl font-semibold text-center md:text-left pb-5">Imóveis Rurais</p>
      </div>
      <div className="py-20 px-6 flex flex-col items-center justify-center gap-5">
        <p className="text-5xl font-bold">:(</p>
        <p className="text-lg font-base text-center">No momento não temos nenhum imóvel rural a venda. <br />Caso queira entrar em contato com o corretor, clique no botão abaixo.</p>
        <div className="pt-5 flex justify-center">
          <button className="bg-neutral-950 hover:bg-neutral-800 text-white py-2 px-4 rounded-lg">
            Fale com o Corretor
          </button>
        </div>
      </div>
  </section>
  )
}