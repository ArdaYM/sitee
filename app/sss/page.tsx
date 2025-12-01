import { Metadata } from 'next'
import { FiChevronDown } from 'react-icons/fi'

export const metadata: Metadata = {
  title: 'Sık Sorulan Sorular | ARYUS',
  description:
    'Klima ve havalandırma sistemleri temizliği, bakımı ve teknik servis hizmetlerimiz hakkında sık sorulan sorular ve cevapları.',
}

const faqs = [
  {
    question: 'Montaj süresi ne kadar sürer?',
    answer: 'Projenin büyüklüğüne ve kapsamına göre değişmekle birlikte, küçük ölçekli projeler 1-2 hafta, büyük ölçekli endüstriyel projeler ise 4-8 hafta arasında tamamlanmaktadır. Detaylı süre bilgisi için proje değerlendirmesi yapılmaktadır.',
  },
  {
    question: 'Garanti var mı?',
    answer: 'Evet, tüm ürün ve hizmetlerimizde garanti bulunmaktadır. İmalat işlerimizde 2 yıl, montaj işlerimizde 1 yıl garanti verilmektedir. Garanti kapsamı ve detayları sözleşmede belirtilmektedir.',
  },
  {
    question: 'Hangi bölgelerde hizmet veriyorsunuz?',
    answer: 'Türkiye genelinde hizmet vermekteyiz. Özellikle İstanbul, Kocaeli, Bursa, Ankara, İzmir gibi büyük şehirlerde aktif olarak çalışmaktayız. Diğer bölgeler için de proje bazlı hizmet sunmaktayız.',
  },
  {
    question: 'Teklif almak ücretsiz mi?',
    answer: 'Evet, keşif ve teknik değerlendirme hizmetimiz ücretsizdir. Projeniz için detaylı bir keşif yaparak, size en uygun çözümü ve maliyeti sunuyoruz.',
  },
  {
    question: 'Acil servis hizmetiniz var mı?',
    answer: 'Evet, acil durumlar için 7/24 servis hizmeti sunmaktayız. Acil durumlarınız için WhatsApp veya telefon ile bize ulaşabilirsiniz.',
  },
  {
    question: 'Hangi malzemeleri kullanıyorsunuz?',
    answer: 'Tüm işlerimizde yüksek kaliteli, sertifikalı malzemeler kullanmaktayız. Paslanmaz çelik, galvanizli sac, alüminyum ve özel alaşımlı malzemeler tercih edilmektedir. Kullanılan malzemeler proje gereksinimlerine göre belirlenmektedir.',
  },
  {
    question: 'Mevcut sistemleri yenileyebilir misiniz?',
    answer: 'Evet, mevcut havalandırma ve baca sistemlerinizi modern ve verimli sistemlerle yenileyebiliriz. Eski sistemlerin değerlendirmesini yaparak, en uygun yenileme çözümünü sunuyoruz.',
  },
  {
    question: 'Bakım hizmeti veriyor musunuz?',
    answer: 'Evet, kurduğumuz sistemlerin düzenli bakım ve onarım hizmetlerini de sunmaktayız. Yıllık bakım anlaşmaları ile sistemlerinizin verimli çalışmasını garantiliyoruz.',
  },
]

export default function SSS() {
  return (
    <div className="pt-32 pb-20">
      <section className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sık Sorulan Sorular
          </h1>
          <p className="text-lg text-gray-600">
            Havalandırma sistemleri ve hizmetlerimiz hakkında merak ettikleriniz
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary-600 transition-colors"
            >
              <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between list-none">
                <span>{faq.question}</span>
                <FiChevronDown className="text-primary-600 flex-shrink-0 ml-4 transition-transform" />
              </summary>
              <p className="text-gray-700 mt-4 leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>

        <div className="mt-12 bg-primary-50 border-2 border-primary-200 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Sorunuz mu var?
          </h2>
          <p className="text-gray-700 mb-6">
            Aradığınız cevabı bulamadıysanız, bizimle iletişime geçmekten çekinmeyin.
          </p>
          <a
            href="/iletisim"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            İletişime Geçin
          </a>
        </div>
      </section>
    </div>
  )
}


