type ImageProps = {
  children: React.ReactNode
}

export function ImageInfo({ children }: ImageProps) {
return (
  <div className="snap-center shrink-0">
      {children}
  </div>)
}