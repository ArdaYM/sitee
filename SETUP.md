# Kurulum ve Yapılandırma Rehberi

## 1. Logo Dosyası

Logo görselini `public/logo.png` olarak ekleyin. Logo PNG formatında ve şeffaf arka planlı olmalıdır.

## 2. Görseller

Aşağıdaki görselleri `public/images/` klasörüne ekleyin:

### Ana Sayfa
- `hero-havalandirma.jpg` - Ana sayfa hero bölümü (1920x1080 önerilir)

### Hakkımızda
- `fabrika-havalandirma.jpg` - Fabrika/havalandırma görseli (800x600 önerilir)
- `sertifika-1.jpg`, `sertifika-2.jpg`, `sertifika-3.jpg` - Sertifika görselleri

### Hizmetler
- `havalandirma-sistemleri.jpg` - Havalandırma hizmeti (800x600)
- `baca-sistemleri.jpg` - Baca hizmeti (800x600)
- `davlumbaz-imalati.jpg` - Davlumbaz hizmeti (800x600)
- `toz-toplama-sistemleri.jpg` - Toz toplama hizmeti (800x600)
- `izolasyon.jpg` - İzolasyon hizmeti (800x600)

### Projeler
- `proje-1.jpg` ile `proje-6.jpg` - Proje görselleri (600x400 önerilir)
- `referans-1.png` ile `referans-6.png` - Referans firma logoları (200x100 önerilir)

### Blog
- `blog-havalandirma.jpg`
- `blog-baca.jpg`
- `blog-enerji.jpg`
- `blog-davlumbaz.jpg`
- `blog-toz.jpg`
- `blog-izolasyon.jpg`

**Not:** Tüm görselleri optimize etmeyi unutmayın (TinyPNG, ImageOptim gibi araçlar kullanabilirsiniz).

## 3. İletişim Bilgileri

Aşağıdaki dosyalarda iletişim bilgilerini güncelleyin:

### `components/Footer.tsx`
- Telefon numarası (satır 58)
- E-posta adresi (satır 62)
- Adres (satır 54)
- WhatsApp numarası (satır 47)
- Sosyal medya linkleri (satır 48-60)

### `app/iletisim/page.tsx`
- Telefon numarası
- E-posta adresi
- Adres
- WhatsApp numarası

### `app/api/contact/route.ts`
- E-posta gönderme servisi entegrasyonu (satır 22-26)

## 4. Google Maps

`app/iletisim/page.tsx` dosyasında Google Maps embed URL'sini güncelleyin:

1. Google Maps'te konumunuzu bulun
2. "Paylaş" butonuna tıklayın
3. "Haritayı yerleştir" sekmesini seçin
4. HTML kodunu kopyalayın
5. `src` özelliğindeki URL'yi `app/iletisim/page.tsx` dosyasındaki iframe'e ekleyin

## 5. E-posta Entegrasyonu

İletişim formu için e-posta gönderme servisi entegre edin:

### Seçenek 1: Nodemailer (kendi SMTP sunucunuz ile)
```bash
npm install nodemailer
npm install --save-dev @types/nodemailer
```

### Seçenek 2: Resend (önerilen)
```bash
npm install resend
```

### Seçenek 3: SendGrid
```bash
npm install @sendgrid/mail
```

`app/api/contact/route.ts` dosyasında ilgili servisi entegre edin.

## 6. SEO Ayarları

### Domain Adı
`app/sitemap.ts` dosyasında `baseUrl` değişkenini güncelleyin.

### Meta Etiketleri
Her sayfa için `metadata` objesini güncelleyin:
- `app/layout.tsx` - Genel site metadata
- `app/hakkimizda/page.tsx`
- `app/hizmetlerimiz/page.tsx`
- `app/projeler/page.tsx`
- `app/blog/page.tsx`
- `app/sss/page.tsx`
- `app/iletisim/layout.tsx`

## 7. Google Analytics (Opsiyonel)

Google Analytics entegrasyonu için `app/layout.tsx` dosyasına script ekleyin.

## 8. Favicon

Favicon dosyasını `public/favicon.ico` olarak ekleyin.

## 9. Proje Bilgileri

Aşağıdaki dosyalarda firma bilgilerini güncelleyin:
- Kuruluş yılı: `app/hakkimizda/page.tsx` (satır 22)
- Proje sayıları: `app/page.tsx` (satır 134, 140)
- Referans firmalar: `app/projeler/page.tsx` (satır 78)

## 10. Deploy

### Vercel (Önerilen)
1. GitHub'a projeyi push edin
2. Vercel'e giriş yapın
3. "New Project" butonuna tıklayın
4. GitHub repository'nizi seçin
5. Deploy butonuna tıklayın

### Diğer Platformlar
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## 11. SSL Sertifikası

Hosting sağlayıcınızla SSL sertifikası ayarlarını yapın. Vercel, Netlify gibi platformlar otomatik SSL sağlar.

## 12. Google My Business

Google My Business hesabınızı oluşturun ve adres bilgilerinizi doğrulayın.

## Sorun Giderme

### Görseller Yüklenmiyor
- Görsellerin `public/images/` klasöründe olduğundan emin olun
- Dosya adlarının doğru yazıldığından emin olun (büyük/küçük harf duyarlı)
- Görsellerin optimize edildiğinden emin olun

### İletişim Formu Çalışmıyor
- API route'un doğru çalıştığından emin olun
- E-posta servisi entegrasyonunu kontrol edin
- Konsol hatalarını kontrol edin

### Stil Sorunları
- `npm install` komutunu çalıştırın
- Tarayıcı cache'ini temizleyin
- Tailwind CSS yapılandırmasını kontrol edin


