# ARYUS Kurumsal Web Sitesi

ARYUS için hazırlanmış, klima ve havalandırma sistemleri temizliği, bakımı ve teknik servis odaklı modern, responsive ve SEO uyumlu Next.js web sitesi.

## Özellikler

- 🎨 Modern ve profesyonel tasarım
- 📱 Tam responsive (mobil uyumlu)
- ⚡ Hızlı yükleme
- 🔍 SEO optimizasyonu
- 🌐 Türkçe içerik
- 📧 İletişim formu
- 🗺️ Google Maps entegrasyonu

## Teknolojiler

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- React Icons

## Kurulum

1. Bağımlılıkları yükleyin:
```bash
npm install
```

2. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

3. Tarayıcıda açın: [http://localhost:3000](http://localhost:3000)

## Yapılandırma

### Logo
Logo dosyasını `public/logo.png` olarak ekleyin.

### Görseller
Aşağıdaki görselleri `public/images/` klasörüne ekleyin:
- `hero-havalandirma.jpg` - Ana sayfa hero görseli
- `fabrika-havalandirma.jpg` - Hakkımızda sayfası görseli
- `havalandirma-sistemleri.jpg` - Havalandırma hizmeti görseli
- `baca-sistemleri.jpg` - Baca hizmeti görseli
- `davlumbaz-imalati.jpg` - Davlumbaz hizmeti görseli
- `toz-toplama-sistemleri.jpg` - Toz toplama hizmeti görseli
- `izolasyon.jpg` - İzolasyon hizmeti görseli
- `proje-1.jpg` ile `proje-6.jpg` - Proje görselleri
- `referans-1.png` ile `referans-6.png` - Referans logoları
- `sertifika-1.jpg` ile `sertifika-3.jpg` - Sertifika görselleri
- Blog görselleri (`blog-havalandirma.jpg`, `blog-baca.jpg`, vb.)

### İletişim Bilgileri
`components/Footer.tsx` ve `app/iletisim/page.tsx` dosyalarında iletişim bilgilerini güncelleyin:
- Telefon numarası
- E-posta adresi
- Adres
- Sosyal medya linkleri

### Google Maps
`app/iletisim/page.tsx` dosyasında Google Maps embed URL'sini güncelleyin.

### E-posta Entegrasyonu
`app/api/contact/route.ts` dosyasında e-posta gönderme servisini entegre edin (Nodemailer, SendGrid, Resend, vb.).

## Üretim Build

```bash
npm run build
npm start
```

## SEO

- Meta etiketleri her sayfada optimize edilmiştir
- Semantic HTML yapısı kullanılmıştır
- Open Graph etiketleri eklendi
- Sitemap ve robots.txt eklenebilir

## Notlar

- Tüm görseller optimize edilmiş olmalı (TinyPNG, ImageOptim gibi araçlar kullanılabilir)
- SSL sertifikası için hosting sağlayıcınızla iletişime geçin
- Google My Business ile entegrasyon yapılabilir

## Lisans

© 2025 ARYUS – Tüm Hakları Saklıdır.


