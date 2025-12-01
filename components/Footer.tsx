import Link from 'next/link'
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'
import { FaWhatsapp, FaLinkedin, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">ARYUS</h3>
            <p className="text-sm mb-4">
              Klima ve havalandırma sistemleri temizliği, bakımı ve teknik servis ile ofis ve ticari alanlara profesyonel çözümler sunuyoruz.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/905324836741"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={24} />
              </a>
              <a
                href="https://linkedin.com/company/aryus"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://instagram.com/aryus"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-300 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">Hızlı Menü</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="hover:text-white transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/hizmetlerimiz" className="hover:text-white transition-colors">
                  Hizmetlerimiz
                </Link>
              </li>
              <li>
                <Link href="/projeler" className="hover:text-white transition-colors">
                  Projeler
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="hover:text-white transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">Hizmetlerimiz</h3>
            <ul className="space-y-2 text-sm">
              <li>Daire, Villa, Apartman İnşaatı</li>
              <li>Ofis ve Ticari Alan Temizliği</li>
              <li>Klima ve Havalandırma Bakım Servisi</li>
              <li>Periyodik Bakım Hizmetleri</li>
              <li>Diğer Teknik Hizmetler</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">İletişim</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <FiMapPin className="mt-1 text-primary-400" />
                <span className="text-sm">
                  Gebze, Kocaeli, Türkiye
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <FiPhone className="text-primary-400" />
                <a href="tel:+905324836741" className="hover:text-white transition-colors">
                  0532 483 67 41
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <FiMail className="text-primary-400" />
                <a href="mailto:info@onurhavalandirma.com" className="hover:text-white transition-colors text-sm">
                  info@onurhavalandirma.com
                </a>
              </li>
              <li className="flex items-start space-x-2 mt-3">
                <span className="text-sm text-gray-400">
                  Çalışma Saatleri:<br />
                  Pzt - Cts: 08:00 - 19:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2025 ARYUS – Tüm Hakları Saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}

