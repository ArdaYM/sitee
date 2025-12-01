import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi'

export const metadata: Metadata = {
  title: 'Hizmetlerimiz | ARYUS',
  description:
    'ARYUS klima ve havalandırma sistemleri temizliği, bakımı ve teknik servis ile ofis ve ticari alanlara profesyonel hizmetler sunar.',
}

const services = [
  {
    id: 'klima-temizlik',
    title: 'Klima Temizliği ve Bakımı',
    description:
      'Split, salon ve VRF klima sistemlerinin iç ve dış ünite temizlikleri, kimyasal dezenfeksiyon ve periyodik bakım hizmetleri.',
    features: [
      'İç ünite filtre ve serpantin temizliği',
      'Dış ünite genel temizliği',
      'Koku ve bakteri oluşumunu önleyici uygulamalar',
      'Gaz kaçağı ve performans kontrolü',
      'Periyodik bakım sözleşmeleri',
    ],
    image: '/images/klima-temizlik.jpg',
  },
  {
    id: 'havalandirma-kanal',
    title: 'Havalandırma Kanal Temizliği',
    description:
      'Ofis, restoran, otel ve ticari binalardaki havalandırma kanallarının profesyonel ekipmanlarla detaylı temizliği.',
    features: [
      'Havalandırma kanalı iç yüzey temizliği',
      'Yağlı kanal ve mutfak davlumbaz hatlarının temizliği',
      'Fan-coil ve menfez temizliği',
      'Video ile öncesi/sonrası raporlama',
      'Filtre yenileme ve iyileştirme önerileri',
    ],
    image: '/images/havalandirma-sistemleri.jpg',
  },
  {
    id: 'teknik-servis',
    title: 'Klima ve Havalandırma Teknik Servis',
    description:
      'Arıza tespiti, parça değişimi ve sistem optimizasyonu dahil olmak üzere klima ve havalandırma sistemleri için teknik servis.',
    features: [
      'Arıza tespiti ve onarım',
      'Orijinal veya muadil yedek parça tedariği',
      'Fan, motor ve kontrol kartı değişimi',
      'Sistem performans ölçümü',
      '7/24 acil servis imkanı (anlaşmaya bağlı)',
    ],
    image: '/images/klima-servis.jpg',
  },
  {
    id: 'ofis-temizlik',
    title: 'Ofis ve Ticari Alan Temizliği',
    description:
      'Ofis, mağaza ve ticari alanlarda düzenli temizlik, detaylı hijyen uygulamaları ve klima/havalandırma ile entegre çözümler.',
    features: [
      'Günlük, haftalık ve aylık temizlik planları',
      'Cam, zemin ve ortak alan temizliği',
      'Toplantı odası ve yoğun kullanılan alan hijyeni',
      'Temizlik sonrası iklimlendirme sistem kontrolü',
      'Esnek çalışma saatleri ile hizmet',
    ],
    image: '/images/ofis-temizlik.jpg',
  },
]

export default function Hizmetlerimiz() {
  return (
    <div className="pt-32 pb-20">
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hizmetlerimiz
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Klima ve havalandırma sistemleri temizliği, bakımı ve teknik servis hizmetleri ile ofis ve ticari
            alanlarınız için hijyenik ve verimli çözümler sunuyoruz.
          </p>
        </div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <FiCheckCircle className="text-primary-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/iletisim"
                  className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                >
                  Teklif Al
                  <FiArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 mt-20">
        <div className="bg-primary-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Hizmetlerimiz Hakkında Detaylı Bilgi Alın
          </h2>
          <p className="text-lg mb-8 text-primary-100">
            Klima ve havalandırma sistemlerinizin temizliği, bakımı veya arızaları için bizimle iletişime geçin;
            size en uygun çözümü birlikte planlayalım.
          </p>
          <Link
            href="/iletisim"
            className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            İletişime Geçin
          </Link>
        </div>
      </section>
    </div>
  )
}


