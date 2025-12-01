import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <head>
        {/* GitHub Pages için basePath eklendi */}
        <link rel="manifest" href="/sitee/manifest.webmanifest" />
        <link rel="icon" href="/sitee/logo.png" />
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
