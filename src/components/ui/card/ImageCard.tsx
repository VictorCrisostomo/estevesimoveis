import { twJoin } from 'tailwind-merge'

type ImageProps = {
  children: React.ReactNode,
  className: string
}

export function ImageCard({ children, className }: ImageProps) {
  return(
    <div className={twJoin("bg-zinc-100 rounded-t-xl", className)}>
      {children}
    </div>
  )
}