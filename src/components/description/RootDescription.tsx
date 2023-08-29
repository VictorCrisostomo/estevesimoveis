type RootProps = {
  children: React.ReactNode
}

export function RootDescription({ children }: RootProps) {
  return(
    <>
      <div className="px-5 md:px-16 pb-10 grid grid-cols-1 md:flex justify-between items-center" >
        {children}
      </div>
    </>
  )
}