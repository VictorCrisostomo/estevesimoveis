type TextProps = {
  descricao: string
  children: React.ReactNode
}

export function TextDescription({ descricao='', children }: TextProps) {
  return(
    <>
      {/* descrição */}
        <div className="md:ml-1 md:max-w-3xl">
          <p className="text-center md:text-left font-semibold text-xl">Descrição do imóvel</p>
          <br />
          <p className="text-center md:text-left">{descricao}</p>
          <div className="py-7 md:py-0 md:pt-5 grid grid-cols-1 px-10 md:px-0 md:flex gap-5 md:gap-20">
            {children}
          </div>
        </div>
    </>
  )
}