import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import '@/globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.className} min-h-screen bg-gray-950 text-gray-100`}>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}
