import { twJoin } from 'tailwind-merge'

type ContentProps = {
  children: React.ReactNode
  className: string
}

export function ContentCard({ children, className }: ContentProps) {
  return(
    <div className={twJoin("bg-zinc-100 rounded-b-xl", className)}>
      <div className="px-7 pt-5 md:pt-3">
        {children}
      </div>
    </div>
  )
}

// w-80 h-60 md:w-72 md:h-56