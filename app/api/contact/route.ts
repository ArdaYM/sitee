import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, service, message } = body

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Tüm zorunlu alanları doldurunuz.' },
        { status: 400 }
      )
    }

    // Burada e-posta gönderme servisi entegre edilebilir
    // Örnek: Nodemailer, SendGrid, Resend, vb.
    // Şimdilik sadece başarılı yanıt döndürüyoruz
    
    console.log('İletişim Formu:', {
      name,
      email,
      phone,
      service,
      message,
      date: new Date().toISOString(),
    })

    // TODO: E-posta gönderme servisi entegrasyonu
    // Şu adrese e-posta gönderilecek: info@onurhavalandirma.com
    // await sendEmail({
    //   to: 'info@onurhavalandirma.com',
    //   subject: `Yeni İletişim Formu: ${name}`,
    //   body: `İsim: ${name}\nE-posta: ${email}\nTelefon: ${phone}\nHizmet: ${service}\nMesaj: ${message}`,
    // })

    return NextResponse.json(
      { message: 'Mesajınız başarıyla gönderildi.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('İletişim formu hatası:', error)
    return NextResponse.json(
      { error: 'Bir hata oluştu. Lütfen tekrar deneyin.' },
      { status: 500 }
    )
  }
}

