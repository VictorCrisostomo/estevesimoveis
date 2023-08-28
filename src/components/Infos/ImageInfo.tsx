type ImageProps = {
  children: React.ReactNode
}

export function ImageInfo({ children }: ImageProps) {
return (
  <div className="snap-center shrink-0">
    <div className="snap-start w-[390px] h-[293px] md:w-[510px] md:h-96 bg-center bg-cover">
      {children}
    </div>
  </div>)
}