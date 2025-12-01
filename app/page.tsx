import Link from 'next/link'
import Image from 'next/image'
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi'

export default function Home() {
  const services = [
    {
      title: 'Klima Temizliği ve Bakımı',
      description: 'Split, salon ve VRF klima sistemlerinin profesyonel temizlik ve bakım hizmetleri.',
      icon: '❄️',
      href: '/hizmetlerimiz#klima-temizlik',
    },
    {
      title: 'Ofis ve Ticari Alan Temizliği',
      description: 'Ofis, plaza ve işyeri için düzenli ve detaylı profesyonel temizlik hizmetleri.',
      icon: '🧼',
      href: '/hizmetlerimiz#temizlik',
    },
    {
      title: 'Klima ve Havalandırma Servisi',
      description: 'Klima ve havalandırma ekipmanlarının bakım, onarım ve periyodik servis hizmetleri.',
      icon: '❄️',
      href: '/hizmetlerimiz#klima-servis',
    },
    {
      title: 'Teknik Bakım ve Destek',
      description: 'Bina ve tesisler için düzenli teknik bakım, arıza tespiti ve hızlı servis çözümleri.',
      icon: '🛠️',
      href: '/hizmetlerimiz#teknik-bakim',
    },
  ]

  const highlights = [
    'Deneyimli Teknik Kadro',
    'Planlı ve Düzenli Bakım',
    'Temiz ve Güvenli Yaşam Alanları',
    'Hızlı Servis ve Destek',
  ]

  return (
    <div>
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Yaşam ve Çalışma Alanları İçin
                <span className="text-primary-600 block mt-2">Profesyonel Çözümler</span>
              </h1>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                ARYUS olarak ofis ve ticari alan temizliği; klima ve havalandırma sistemleri temizliği,
                bakımı ve teknik servis hizmetlerinde uçtan uca çözümler sunuyoruz.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm"
                  >
                    <FiCheckCircle className="text-primary-600" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/iletisim"
                  className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center"
                >
                  Teklif Al
                  <FiArrowRight className="ml-2" />
                </Link>
                <Link
                  href="/hizmetlerimiz"
                  className="bg-white text-primary-600 border-2 border-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors flex items-center justify-center"
                >
                  Hizmetlerimiz
                </Link>
              </div>
            </div>
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-havalandirma.jpg"
                alt="ARYUS - Yaşam ve Çalışma Alanları Çözümleri"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hizmetlerimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Klima ve havalandırma sistemleri temizliği, bakımı ve ofis/ticari alan temizliği için profesyonel çözümler.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary-600 hover:shadow-lg transition-all group"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex items-center text-primary-600 font-semibold">
                  Detaylar
                  <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Neden ARYUS?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-5xl font-bold text-primary-600 mb-4">360°</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Uçtan Uca Hizmet</h3>
              <p className="text-gray-600">
                Temizlikten klima ve havalandırma bakımına kadar tüm süreçleri tek elden yönetiyoruz.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-5xl font-bold text-primary-600 mb-4">7/24</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Destek ve Servis</h3>
              <p className="text-gray-600">
                Acil durumlar ve arızalar için günün her saati teknik destek ve servis imkanı.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-5xl font-bold text-primary-600 mb-4">%100</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Müşteri Memnuniyeti</h3>
              <p className="text-gray-600">
                Şeffaf süreçler, zamanında teslim ve kalite odaklı çalışma prensipleriyle güven veriyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-primary-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Projeniz İçin Teklif Alın
            </h2>
            <p className="text-lg mb-8 text-primary-100">
              Temizlik veya klima/havalandırma bakım ihtiyaçlarınızı birlikte planlayalım.
            </p>
            <Link
              href="/iletisim"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              İletişime Geçin
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

