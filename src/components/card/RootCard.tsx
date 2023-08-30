type RootProps = {
  children: React.ReactNode
}

export function RootCard({ children }: RootProps) {
  return(
    <div className="w-72 h-96 md:w-60 md:h-80 mb-10 rounded-2xl drop-shadow-lg">
      {children}
    </div>
  )
}