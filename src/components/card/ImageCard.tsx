type ImageProps = {
  children: React.ReactNode
}

export function ImageCard({ children }: ImageProps) {
  return(
    <div className="w-72 h-40 md:w-60 md:h-32 bg-yellow-500 rounded-t-xl">
      {children}
    </div>
  )
}