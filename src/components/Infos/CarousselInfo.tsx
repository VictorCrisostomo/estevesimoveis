type CarousselProps = {
  children: React.ReactNode
}

export function CarousselInfo({ children }: CarousselProps) {
  return (
    <div className="relative overflow-auto">
      <div className="relative flex gap-1 snap-x overflow-x-auto scrollCards">
        {children}
    </div>
  </div>
  )
}