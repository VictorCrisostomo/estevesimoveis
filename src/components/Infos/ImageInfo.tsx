import { twJoin } from 'tailwind-merge'

type ImageProps = {
  children: React.ReactNode
  className: string
}

export function ImageInfo({ children, className }: ImageProps) {
return (
  <div className="snap-center shrink-0">
    <div className={twJoin("snap-start bg-center bg-cover", className)}>
      {children}
    </div>
  </div>)
}