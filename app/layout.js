import './globals.css'
import { Inter } from 'next/font/google'
import Head from "next/head"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Harsh Shekhawat',
  description: 'Personal Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head className='text-5xl'>
         <a rel="shortcut icon" href="./logo.ico" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
