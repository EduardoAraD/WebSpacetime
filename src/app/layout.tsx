import './globals.css'
import { ReactNode } from 'react'
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjurre,
} from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baijamjurre = BaiJamjurre({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjurre',
})

export const metadata = {
  title: 'NLW Spacetime',
  description:
    'Uma cápsula do tempo contruída com React, Next JS, TailwindCSS e TypeScript.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baijamjurre.variable} bg-gray-900 font-sans text-gray-100`}
      >
        {children}
      </body>
    </html>
  )
}
