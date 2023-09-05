type GroupProps = {
  title: string;
  children: React.ReactNode;
}

export function RootGroup({ title='', children }: GroupProps) {
  return(
    <section className="py-10 md:px-24 md:py-20">
      <div className="mx-6">
        <p className="text-zinc-800 text-xl font-semibold text-center md:text-left pb-5">{title}</p>
      </div>
      <div className="gap-4 md:gap-8 grid grid-cols-1 md:grid-cols-4 justify-items-center">
        {children}
      </div>
  </section>
  )
}