type GroupProps = {
  children: React.ReactNode
}

export function Group({ children }: GroupProps) {
  return(
    <section className="bg-zinc-200">
    <div className="md:mx-20">
      <h2 className="text-xl font-semibold text-center text-zinc-700">Destaques</h2>

      <div className="my-10 flex flex-col items-center gap-8 md:gap-14 md:flex-row md:justify-center">
        {children}
      </div>
      <div className="flex justify-center my-10">
          <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-24 md:px-4 rounded">Ver mais</button>
      </div>
    </div>
  </section>
  )
}