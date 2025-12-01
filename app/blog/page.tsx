import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FiCalendar, FiArrowRight } from 'react-icons/fi'

export const metadata: Metadata = {
  title: 'Blog & Haberler | ARYUS',
  description:
    'Klima ve havalandırma sistemleri temizliği, bakımı ve ofis hijyeni hakkında ipuçları, öneriler ve güncel haberler.',
}

const blogPosts = [
  {
    id: 1,
    title: 'Klima Temizliği Neden Bu Kadar Önemli?',
    excerpt:
      'Düzenli yapılmayan klima temizliğinin sağlık, enerji tüketimi ve cihaz ömrü üzerindeki etkilerini keşfedin.',
    image: '/sitee/images/blog-klima-temizlik.jpg',
    date: '15 Ocak 2025',
    category: 'Klima Bakımı',
  },
  {
    id: 2,
    title: 'Havalandırma Kanal Temizliği ile Toz ve Koku Kontrolü',
    excerpt:
      'Ofis ve ticari binalarda havalandırma kanalı temizliğinin iç hava kalitesine etkisi ve nelere dikkat edilmesi gerektiği.',
    image: '/sitee/images/blog-havalandirma.jpg',
    date: '10 Ocak 2025',
    category: 'Havalandırma',
  },
  {
    id: 3,
    title: 'Ofis Hijyeni: Temizlik ve İklimlendirme Birlikte Düşünülmeli',
    excerpt:
      'Ofis temizliği ile klima ve havalandırma bakımlarının birlikte planlanmasının çalışan sağlığına katkıları.',
    image: '/sitee/images/blog-ofis-temizlik.jpg',
    date: '5 Ocak 2025',
    category: 'Ofis Hijyeni',
  },
  {
    id: 4,
    title: 'Periyodik Klima Bakımı ile Enerji Tasarrufu',
    excerpt:
      'Periyodik klima bakımı ile enerji faturalarınızı nasıl düşürebileceğinizi ve cihaz verimini nasıl artırabileceğinizi öğrenin.',
    image: '/sitee/images/blog-enerji.jpg',
    date: '28 Aralık 2024',
    category: 'Enerji Verimliliği',
  },
  {
    id: 5,
    title: 'Restoran ve Kafelerde Mutfak Havalandırma Temizliği',
    excerpt:
      'Mutfak davlumbazı ve yağlı kanal temizliğinin yangın güvenliği ve koku kontrolü açısından kritik önemi.',
    image: '/sitee/images/blog-davlumbaz.jpg',
    date: '20 Aralık 2024',
    category: 'Mutfak Havalandırma',
  },
  {
    id: 6,
    title: 'İşyeri İçin Doğru Klima Seçimi ve Sonrası',
    excerpt:
      'Ofisiniz için doğru klima kapasitesini belirlerken dikkat etmeniz gerekenler ve kurulum sonrası bakım ipuçları.',
    image: '/sitee/images/blog-klima-secim.jpg',
    date: '15 Aralık 2024',
    category: 'Klima Seçimi',
  },
]

export default function Blog() {
  return (
    <div className="pt-32 pb-20">
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Blog & Haberler
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Klima ve havalandırma sistemleri temizliği, bakımı ve ofis hijyeni hakkında pratik bilgiler,
            ipuçları ve ARYUS&apos;tan haberler.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <Link href={`/blog/${post.id}`}>
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <FiCalendar className="mr-2" />
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-primary-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-primary-600 font-semibold">
                    Devamını Oku
                    <FiArrowRight className="ml-2" />
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}



