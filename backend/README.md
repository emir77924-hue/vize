# Kampüs Etkinlikleri - Backend REST API (Sprint 8: Kalıcı Veri)

Bu proje, frontend uygulamasının yanında çalışan ve etkinlik verilerini MongoDB üzerinde Mongoose ODM ile kalıcı olarak saklayan Node.js + Express tabanlı bir REST API sunucusudur.

---

## 🚀 Kurulum ve Çalıştırma

Projeyi yerel ortamınızda başlatmak için terminalde `backend` klasörüne geçerek aşağıdaki adımları uygulayın:

```bash
# Backend klasörüne geçiş yapın
cd backend

# Gerekli bağımlılıkları yükleyin
npm install

# Veritabanını 6 örnek etkinlik verisi ile doldurun (seed)
npm run seed

# Geliştirme (watch) modunda sunucuyu başlatın
npm run dev
```

Sunucu varsayılan olarak `http://localhost:3000` adresinde çalışacaktır.

---

## ⚙️ Ortam Değişkenleri (.env)

Sunucu ayarları ve veritabanı bağlantı dizesi koda gömülü olmayıp `.env` dosyası üzerinden dinamik olarak okunur:
* `PORT`: Sunucunun dinleyeceği port numarasıdır (varsayılan: `3000`).
* `MONGODB_URI`: MongoDB bağlantı dizesidir (yerel veya MongoDB Atlas).

`.env.example` dosyasını referans alarak `.env` dosyanızı oluşturabilirsiniz:
```env
PORT=3000
MONGODB_URI=mongodb://127.0.0.1:27017/kampus
```

> **Önemli Güvenlik Notu:** `.env` ve `node_modules/` klasörü gizlilik ve temiz repo yapısı amacıyla `.gitignore` ile korunmaktadır ve GitHub'a yüklenmez. Gerçek bağlantı şifreleri asla repoya commit edilmez.

---

## 📋 REST API Sözleşmesi

Aşağıdaki tablo, Sprint 8 kapsamında Mongoose ve MongoDB kalıcı veri katmanı ile çalışan endpoint sözleşmelerini tanımlar:

| Method | Endpoint | Amaç | Başarılı Durum Kodu | Hata Durum Kodu | Durum |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **GET** | `/health` | Sunucu sağlık kontrolü ve öğrenci no doğrulaması (`2416501018`) | `200 OK` | — | Aktif |
| **GET** | `/events` | Tüm etkinlik listesini getir (tarihe göre sıralı, opsiyonel `?category=` filtresi) | `200 OK` | `500 Server error` | Aktif |
| **GET** | `/events/:id` | MongoDB `_id`sine göre tek bir etkinliği getir | `200 OK` | `404 Not Found` | Aktif |
| **POST** | `/events` | Yeni bir etkinlik oluşturur (`title`, `category`, `date` zorunlu) | `201 Created` | `400 Bad Request` | Aktif |
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
