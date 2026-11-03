# Kampüs Etkinlikleri - Frontend (Sprint 6 & Vize)

Bu proje; fakültedeki seminer, atölye ve söyleşileri tek bir yerden takip etmeyi sağlayan, React Router ve Context API mimarisiyle geliştirilmiş bir kampüs etkinlik yönetim uygulamasıdır.

## 🚀 Canlı Vercel Adresi

https://emircantuncay-frontendd-pi.vercel.app/
---

## ⚙️ Kurulum ve Çalıştırma

Projeyi yerel ortamınızda çalıştırmak için terminalde sırasıyla şu komutları çalıştırın:

```bash
# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
🗺️ Route Listesi (Sayfalar ve Rotalar)
Projede yer alan 10 adet rota ve karşılık gelen sayfalar:

/ → Ana Sayfa (HomePage) - Yaklaşan etkinlikler özeti

/events → Etkinlikler Sayfası (EventsPage) - Arama ve kategori filtreleme

/events/:id → Etkinlik Detay Sayfası (EventDetailPage) - Seçilen etkinliğin künyesi

/login → Giriş Sayfası (LoginPage) - Kullanıcı giriş formu ve doğrulamalar

/register → Kayıt Sayfası (RegisterPage) - Yeni kullanıcı kayıt formu

/forgot-password → Şifremi Unuttum Sayfası (ForgotPasswordPage) - Şifre sıfırlama talebi

/admin → Yönetim Paneli (AdminPage) - Etkinlik listesi, silme ve düzenleme tablosu

/admin/new → Yeni Etkinlik Ekleme (AddEventPage) - Etkinlik oluşturma formu

/admin/:id/edit → Etkinlik Güncelleme (EditEventPage) - Mevcut etkinliği düzenleme formu

* → Bulunamadı Sayfası (NotFoundPage) - 404 Hata yönlendirmesi
