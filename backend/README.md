# Kampüs Etkinlikleri - Backend REST API (Sprint 9: Tam CRUD ve Sorgular)

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

# Geliştirme modunda sunucuyu başlatın
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

Aşağıdaki tablo, Sprint 9 kapsamında çalışan tüm endpoint sözleşmelerini tanımlar:

| Method | Endpoint | Başarılı | Hata | Durum |
| :--- | :--- | :--- | :--- | :--- |
| **GET** | `/health` | `200` | — | çalışıyor |
| **GET** | `/events?search=&category=` | `200` | — | çalışıyor |
| **GET** | `/events/upcoming` | `200 - tarihe göre sıralı` | — | çalışıyor |
| **GET** | `/events/:id` | `200` | `404` | çalışıyor |
| **POST** | `/events` | `201` | `400` | çalışıyor |
| **PATCH** | `/events/:id` | `200 - güncel kayıt` | `400, 404` | çalışıyor |
| **DELETE** | `/events/:id` | `204 - gövde yok` | `404` | çalışıyor |

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

* **Tarih Formatı:** Tarihler API genelinde `GG-AA-YYYY` (örn: `"15-10-2026"`) biçiminde alınır ve döndürülür, MongoDB'de gerçek Date nesnesi olarak saklanır.
* **Geçersiz ID:** Geçersiz ya da bulunamayan ID sorgularında `404 Not Found` yanıtı verilir.
