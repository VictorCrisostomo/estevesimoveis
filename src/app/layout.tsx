import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })

export const metadata: Metadata = {
  title: 'Esteves Imóveis',
  description: 'Mais qualidade de vida para a sua familia!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.variable} font-sans`}>{children}</body>
    </html>
  )
}
