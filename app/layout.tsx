import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'ARYUS | Klima ve Havalandırma Sistemleri Temizlik ve Teknik Servis',
  description:
    'ARYUS, klima ve havalandırma sistemleri temizliği, bakımı ve teknik servis hizmetleri ile ofis, işyeri ve yaşam alanlarında profesyonel çözümler sunar.',
  keywords:
    'ARYUS, klima temizliği, klima bakımı, havalandırma kanalı temizliği, havalandırma bakım, fan-coil temizliği, ofis temizliği',
  openGraph: {
    title: 'ARYUS | Klima ve Havalandırma Sistemleri Temizlik ve Teknik Servis',
    description:
      'Klima ve havalandırma sistemlerinin temizliği, bakımı ve teknik servisi için profesyonel çözümler. Ofis ve ticari alanlar için hijyenik ve verimli iklimlendirme.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <head>
        {/* Manifest ve favicon ekliyoruz */}
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="icon" href="/logo.png" />
        <meta name="theme-color" content="#0079e6" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
