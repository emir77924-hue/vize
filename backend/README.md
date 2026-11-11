# Kampüs Etkinlikleri - Backend REST API (Sprint 7)

Bu proje, frontend uygulamasının yanında çalışan ve etkinlik verilerini JSON formatında sunan Node.js + Express tabanlı bir REST API sunucusudur.

---

## 🚀 Kurulum ve Çalıştırma

Projeyi yerel ortamınızda başlatmak için terminalde `backend` klasörüne geçerek aşağıdaki adımları uygulayın:

```bash
# Backend klasörüne geçiş yapın
cd backend

# Gerekli bağımlılıkları yükleyin
npm install

# Geliştirme (watch) modunda sunucuyu başlatın
npm run dev
```

Sunucu varsayılan olarak `http://localhost:3000` adresinde çalışacaktır.

---

## ⚙️ Ortam Değişkenleri (.env)

Sunucu ayarları koda gömülü olmayıp `.env` dosyası üzerinden dinamik olarak okunur:
* `PORT`: Sunucunun dinleyeceği port numarasıdır (varsayılan: `3000`).

`.env.example` dosyasını referans alarak `.env` dosyanızı oluşturabilirsiniz:
```env
PORT=3000
```

> **Not:** `.env` ve `node_modules/` klasörü gizlilik ve temiz repo yapısı amacıyla `.gitignore` ile korunmaktadır ve GitHub'a yüklenmez.

---

## 📋 REST API Sözleşmesi

Aşağıdaki tablo, Sprint 7 kapsamında geliştirilen ve sonraki sprintlerde eklenecek olan tüm endpoint sözleşmelerini tanımlar:

| Method | Endpoint | Amaç | Başarılı Durum Kodu | Hata Durum Kodu | Durum |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GET** | `/health` | Sunucu sağlık kontrolü ve öğrenci no doğrulaması | `200 OK` | — | Bu sprint |
| **GET** | `/events` | Tüm etkinlik listesini getir (opsiyonel `?category=` filtresi) | `200 OK` | — | Bu sprint |
| **GET** | `/events/:id` | ID'ye göre tek bir etkinliği getir | `200 OK` | `404 Not Found` | Bu sprint |
| **POST** | `/events` | Yeni bir etkinlik oluşturur (`title`, `category`, `date` zorunlu) | `201 Created` | `400 Bad Request` | Bu sprint |
| **PATCH** | `/events/:id` | Var olan etkinliği günceller | `200 OK` | `400 Bad Request`, `404 Not Found` | Sprint 9 |
| **DELETE**| `/events/:id` | Var olan etkinliği siler | `204 No Content` | `404 Not Found` | Sprint 9 |

---

### 🛡️ Standart Hata Yanıt Formatı

Tüm hata durumlarında API tutarlı bir JSON formatı ile yanıt verir:

```json
{
  "error": {
    "message": "Event not found"
  }
}
```

---

## 🧪 Postman Test İstekleri

Otomatik değerlendirme ve doğrulama için gerekli 6 adet test isteği Postman v2.1 Collection formatında `requests/kampus-api.json` dosyasına eklenmiştir.
