import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'İletişim | ARYUS',
  description:
    'ARYUS ile iletişime geçin. Klima ve havalandırma sistemleri temizliği, bakımı ve teknik servis ihtiyaçlarınız için teklif alın.',
}

export default function IletisimLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}


