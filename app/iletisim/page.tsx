'use client'

import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import ContactForm from '@/components/ContactForm'

export default function Iletisim() {
  return (
    <div className="pt-32 pb-20">
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            İletişim
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Projeleriniz için bizimle iletişime geçin. Uzman ekibimiz size en uygun çözümü sunmak için hazır.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiMapPin className="text-primary-600 text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Adres</h3>
            <p className="text-gray-600 text-sm">
              Gebze, Kocaeli, Türkiye
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiPhone className="text-primary-600 text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Telefon</h3>
            <a href="tel:+905324836741" className="text-primary-600 hover:text-primary-700 font-medium">
              0532 483 67 41
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiMail className="text-primary-600 text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">E-posta</h3>
            <a href="mailto:info@onurhavalandirma.com" className="text-primary-600 hover:text-primary-700 text-sm break-all">
              info@onurhavalandirma.com
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiClock className="text-primary-600 text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Çalışma Saatleri</h3>
            <p className="text-gray-600 text-sm">
              Pzt - Cts<br />
              08:00 - 19:00
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">İletişim Formu</h2>
            <ContactForm />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Harita</h2>
            <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md h-96 mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3013.1234567890123!2d29.4321!3d40.8067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ4JzI0LjEiTiAyOcKwMjUnNTUuNiJF!5e0!3m2!1str!2str!4v1234567890123!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ARYUS Konum"
              />
            </div>
            <div className="bg-primary-600 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Hızlı İletişim</h3>
              <a
                href="https://wa.me/905324836741"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-semibold transition-colors mb-3"
              >
                <FaWhatsapp className="mr-2 text-xl" />
                WhatsApp ile Yaz
              </a>
              <div className="mt-4 pt-4 border-t border-primary-500">
                <p className="text-sm text-primary-100 font-semibold mb-2">Çalışma Saatleri</p>
                <p className="text-sm text-primary-100">
                  Pazartesi - Cumartesi: 08:00 - 19:00
                </p>
                <p className="text-xs text-primary-200 mt-2">
                  Pazar günü kapalıyız
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

