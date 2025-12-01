import { Metadata } from 'next'
import Image from 'next/image'
import { FiCheckCircle, FiAward } from 'react-icons/fi'

export const metadata: Metadata = {
  title: 'Hakkımızda | ARYUS',
  description:
    'ARYUS, klima ve havalandırma sistemleri temizliği, bakımı ve teknik servis hizmetleri ile ofis, işyeri ve yaşam alanlarında profesyonel çözümler sunar.',
}

export default function Hakkimizda() {
  return (
    <div className="pt-32 pb-20">
      <section className="container mx-auto px-4 mb-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hakkımızda
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            ARYUS, klima ve havalandırma sistemleri temizliği, bakımı ve teknik servis hizmetleri alanında
            uzmanlaşmış bir firmadır. Ofis, işyeri ve yaşam alanlarında sağlıklı ve verimli hava kalitesi
            sunmak için çalışıyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Hikayemiz</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              ARYUS, iklimlendirme ve havalandırma alanında edinilen saha tecrübeleri ve teknik bilgi birikimi
              üzerine kurulmuştur. Amacımız, klima ve havalandırma sistemlerinin yalnızca kurulumu değil,
              uzun vadeli performansı ve hijyenini de garanti altına almaktır.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Bugün; ofisler, iş merkezleri, mağazalar, klinikler ve konut projeleri başta olmak üzere birçok
              farklı yapıda klima ve havalandırma sistemlerinin temizlik, bakım ve arıza süreçlerini
              profesyonelce yönetiyoruz.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Her projede, üretici marka şartnamelerine uygun bakım, doğru yedek parça kullanımı ve
              detaylı temizlik uygulamaları ile sistemlerin verimli, sessiz ve hijyenik çalışmasını hedefliyoruz.
            </p>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/sitee/images/fabrika-havalandirma.jpg"
              alt="ARYUS Havalandırma ve Klima Sistemleri"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <FiAward className="text-primary-600 mr-3" />
                Misyonumuz
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Klima ve havalandırma sistemlerinin temizliği ve bakımı ile insanların daha sağlıklı,
                ferah ve konforlu ortamlarda yaşamalarını sağlamak. Bunu yaparken; hijyen, enerji
                verimliliği ve sürdürülebilirlikten ödün vermeden, her ölçekteki projeye uygun çözümler
                geliştirmek.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <FiAward className="text-primary-600 mr-3" />
                Vizyonumuz
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Türkiye&apos;de klima ve havalandırma sistemleri temizlik ve bakım denildiğinde akla gelen
                ilk markalardan biri olmak. Gelişen teknoloji ve standartları yakından takip ederek,
                hizmet kalitemizi sürekli artırmak ve uzun vadeli iş ortaklıkları kurmak.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Değerlerimiz</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Hijyen ve Sağlık', desc: 'Temizlik ve bakım süreçlerinde insan sağlığını merkeze alırız.' },
            { title: 'Güvenilirlik', desc: 'Zamanında müdahale ve söz verdiğimiz işi eksiksiz tamamlama.' },
            { title: 'Uzmanlık', desc: 'Eğitimli teknik ekip ve sektörel tecrübe ile doğru teşhis, doğru çözüm.' },
            { title: 'Şeffaflık', desc: 'Süreç, raporlama ve maliyetlerde açık ve anlaşılır bir yaklaşım.' },
          ].map((value, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-primary-600 transition-colors"
            >
              <FiCheckCircle className="text-primary-600 text-3xl mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sertifikalar ve Standartlar</h2>
            <p className="text-gray-600">
              Kullandığımız kimyasallar, ekipmanlar ve uygulama yöntemleri ilgili standart ve yönetmeliklere uygundur.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="relative h-48 mb-4">
                  <Image
                    src={`/sitee/images/sertifika-${item}.jpg`}
                    alt={`Sertifika ${item}`}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-semibold text-gray-900">Sertifika {item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}


