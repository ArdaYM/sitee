import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ARYUS',
    short_name: 'ARYUS',
    description: 'Klima ve havalandırma sistemleri temizliği, bakımı ve teknik servis hizmetleri',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0079e6',
    icons: [
      {
        src: '/logo.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}




