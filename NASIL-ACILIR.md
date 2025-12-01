# Siteyi Nasıl Açarsınız? 🚀

## Adım 1: Node.js Kurulu mu Kontrol Edin

1. **Windows + R** tuşlarına basın
2. `cmd` yazıp Enter'a basın
3. Şu komutu yazın:
```
node --version
```

Eğer "komut bulunamadı" hatası alıyorsanız, Node.js kurulu değildir.
👉 [Node.js'i buradan indirin](https://nodejs.org/) (LTS versiyonunu öneriyoruz)

## Adım 2: Bağımlılıkları Yükleyin

**Yöntem 1: CMD (Command Prompt) kullanarak (ÖNERİLEN)**

1. **Windows + R** tuşlarına basın
2. `cmd` yazıp Enter'a basın
3. Proje klasörüne gidin:
```
cd C:\Users\ARDA\Desktop\onur
```
4. Bağımlılıkları yükleyin:
```
npm install
```

**Yöntem 2: PowerShell Execution Policy'yi değiştirerek**

1. PowerShell'i **Yönetici olarak** açın (sağ tık > Yönetici olarak çalıştır)
2. Şu komutu çalıştırın:
```
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```
3. `Y` yazıp Enter'a basın
4. Proje klasörüne gidin ve npm install çalıştırın

## Adım 3: Geliştirme Sunucusunu Başlatın

CMD veya PowerShell'de proje klasöründeyken:
```
npm run dev
```

Başarılı olursa şunu göreceksiniz:
```
✓ Ready in 2.5s
○ Local: http://localhost:3000
```

## Adım 4: Siteyi Tarayıcıda Açın

1. Herhangi bir tarayıcıyı açın (Chrome, Edge, Firefox, vb.)
2. Adres çubuğuna şunu yazın:
```
http://localhost:3000
```

## Önemli Notlar ⚠️

### Logo ve Görseller Eksikse
Site açılır ama görseller görünmeyebilir. Bu normaldir. Görselleri eklemek için:
1. Logo: `public/logo.png` dosyasına logo görselinizi ekleyin
2. Görseller: `public/images/` klasörüne gerekli görselleri ekleyin
   - Detaylı liste için `SETUP.md` dosyasına bakın

### Site Açılmazsa
1. **Port 3000 kullanımda mı?** Başka bir uygulama 3000 portunu kullanıyorsa, Next.js otomatik olarak 3001, 3002 gibi bir port kullanacaktır. Terminalde gösterilen portu kullanın.

2. **Hata mesajı alıyorsanız:**
   - Terminal'deki hata mesajını okuyun
   - `node_modules` klasörünü silip tekrar `npm install` deneyin

### Siteyi Kapatmak İçin
Terminal'de **Ctrl + C** tuşlarına basın.

## Hızlı Başlangıç Özeti

```bash
# 1. Proje klasörüne git
cd C:\Users\ARDA\Desktop\onur

# 2. Bağımlılıkları yükle
npm install

# 3. Sunucuyu başlat
npm run dev

# 4. Tarayıcıda aç
http://localhost:3000
```

## Sorun Giderme

### "npm: komut bulunamadı" hatası
- Node.js kurulu değil veya PATH'e eklenmemiş
- Node.js'i yeniden kurun ve bilgisayarı yeniden başlatın

### "Port already in use" hatası
- Başka bir uygulama 3000 portunu kullanıyor
- O uygulamayı kapatın veya farklı bir port kullanın

### Görseller görünmüyor
- Normal, henüz görseller eklenmedi
- `public/images/` klasörüne görselleri ekleyin

## İletişim Bilgilerini Güncelleme

Site açıldıktan sonra, iletişim bilgilerinizi güncellemeyi unutmayın:
- `components/Footer.tsx`
- `app/iletisim/page.tsx`

Detaylı bilgi için `SETUP.md` dosyasına bakın.


