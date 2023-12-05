type RootProps = {
  children: React.ReactNode
}

export function RootCard({ children }: RootProps) {
  return(
    <div className="mb-4 md:mb-2 rounded-2xl drop-shadow-lg">
      {children}
    </div>
  )
}