import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FiExternalLink, FiMapPin } from 'react-icons/fi'

export const metadata: Metadata = {
  title: 'Projeler & Referanslar | ARYUS',
  description:
    'ARYUS olarak klima ve havalandırma sistemleri temizliği, bakımı ve teknik servis alanında tamamladığımız projeler ve referanslarımız.',
}

const projects = [
  {
    title: 'Kurumsal Ofis Klima Bakım Projesi',
    location: 'Gebze, Kocaeli',
    description:
      'Kurumsal bir ofis binasında tüm split ve VRF klima sistemlerinin sezonluk bakım, filtre değişimi ve performans kontrolleri.',
    services: ['Klima Bakımı', 'Filtre Değişimi', 'Performans Testleri'],
    image: '/sitee/images/proje-1.jpg',
    year: '2024',
  },
  {
    title: 'AVM Havalandırma Kanal Temizliği',
    location: 'İstanbul',
    description:
      'Alışveriş merkezinde taze hava ve egzoz hatları dahil tüm havalandırma kanallarının robotik sistemlerle detaylı temizliği.',
    services: ['Kanal Temizliği', 'Menfez Temizliği', 'Raporlama'],
    image: '/sitee/images/proje-2.jpg',
    year: '2023',
  },
  {
    title: 'Restoran Mutfak Davlumbaz ve Kanal Temizliği',
    location: 'İzmit, Kocaeli',
    description:
      'Yoğun kullanılan bir restoran mutfağında davlumbaz, yağlı kanal ve fan temizliği ile yangın riski azaltıldı.',
    services: ['Davlumbaz Temizliği', 'Yağlı Kanal Temizliği', 'Fan Bakımı'],
    image: '/sitee/images/proje-3.jpg',
    year: '2023',
  },
  {
    title: 'Sağlık Kurumu Klima Hijyen Projesi',
    location: 'İstanbul',
    description:
      'Poliklinik katlarında bulunan klima sistemlerinin hijyen odaklı temizliği ve bakım uygulamaları.',
    services: ['Hijyenik Temizlik', 'Kimyasal Uygulama', 'Detaylı Raporlama'],
    image: '/sitee/images/proje-4.jpg',
    year: '2022',
  },
  {
    title: 'Plaza Ortak Alan Klima ve Fan-Coil Bakımı',
    location: 'Ankara',
    description:
      'Plaza ortak alanlarındaki fan-coil ve klima cihazlarının periyodik bakım ve temizlik çalışmaları.',
    services: ['Fan-Coil Bakımı', 'Filtre Temizliği', 'Dengeleme Çalışmaları'],
    image: '/sitee/images/proje-5.jpg',
    year: '2022',
  },
  {
    title: 'Üretim Tesisi Havalandırma Servisi',
    location: 'Bursa',
    description:
      'Üretim tesisinde proses havalandırma sistemlerinin bakım, fan değişimi ve kanal temizlikleri.',
    services: ['Havalandırma Bakımı', 'Fan Değişimi', 'Kanal Temizliği'],
    image: '/sitee/images/proje-6.jpg',
    year: '2021',
  },
]

const clients = ['Kurumsal Ofis', 'AVM', 'Restoran', 'Sağlık Kurumu', 'Plaza', 'Üretim Tesisi']

export default function Projeler() {
  return (
    <div className="pt-32 pb-20">
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Projeler & Referanslar
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Klima ve havalandırma sistemleri temizliği, bakımı ve teknik servis alanında birçok farklı sektörde
            projeler tamamladık. İşte seçili çalışmalarımızdan bazıları.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {project.year}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <div className="flex items-center text-gray-600 mb-3">
                  <FiMapPin className="mr-2" />
                  <span className="text-sm">{project.location}</span>
                </div>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.services.map((service, idx) => (
                    <span
                      key={idx}
                      className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {service}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/projeler/${index + 1}`}
                  className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                >
                  Proje Detayı
                  <FiExternalLink className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Referanslarımız
            </h2>
            <p className="text-gray-600">
              Farklı sektörlerden iş ortaklarımızla uzun soluklu ilişkiler kuruyor, sistemlerini düzenli olarak
              bakımdan geçiriyoruz.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-32 hover:shadow-lg transition-shadow"
              >
                <div className="text-center text-sm font-semibold text-gray-800">
                  {client}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}



