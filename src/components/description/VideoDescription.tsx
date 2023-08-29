type VideoProps = {
  url: string
}

export function VideoDescription({ url='' }: VideoProps) {
  return(
    <>
      {/* video */}
      <p className="py-5 text-center text-xl font-semibold" id="description">Por dentro do imóvel</p>
      <div className="pb-10 flex justify-center">
        <iframe className="w-[360px] h-[206px] md:w-[720px] md:h-[420px] rounded-xl" src={url} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" />
      </div>
    </>
  )
}