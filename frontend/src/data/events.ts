import type { CampusEvent } from "../types/campus-event";

export const events: CampusEvent[] = [
  {
    id: "event-1",
    title: "Yapay Zeka ve Büyük Veri Zirvesi 2026",
    category: "Seminer",
    date: "14-10-2026",
    time: "13:30",
    location: "Merkez Amfi 1",
    description: "Üretken yapay zeka modelleri ve büyük veri analitiğinin geleceğine dair uzman sunumları.",
    capacity: 150,
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "event-2",
    title: "Otonom Robotik ve Gömülü Sistemler Atölyesi",
    category: "Atölye",
    date: "22-10-2026",
    time: "10:30",
    location: "Mühendislik Fakültesi Lab 3",
    description: "Mikrodenetleyici programlama ile otonom engel algılayan robot prototipi geliştirme.",
    capacity: 30,
    image: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "event-3",
    title: "Siber Savunma ve Etik Hackerlık Söyleşisi",
    category: "Söyleşi",
    date: "29-10-2026",
    time: "14:00",
    location: "C Blok Konferans Salonu",
    description: "Kurumsal siber güvenlik önlemleri, sızma testleri ve sektör kariyer fırsatları.",
    capacity: 75,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "event-4",
    title: "Modern Web Mimarisi ve React 19 Atölyesi",
    category: "Atölye",
    date: "05-11-2026",
    time: "15:00",
    location: "Yazılım Laboratuvarı 2",
    description: "Component mimarisi, custom hook tasarımı ve modern CSS teknikleriyle web geliştirme.",
    capacity: 35,
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "event-5",
    title: "Bulut Bilişim ve DevOps Vizyonu",
    category: "Seminer",
    date: "12-11-2026",
    time: "11:00",
    location: "A Blok Konferans Salonu",
    description: "Docker, Kubernetes ve CI/CD süreçleri ile mikroservis mimarisine geçiş deneyimleri.",
    capacity: 110,
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "event-6",
    title: "Yazılım Girişimciliği ve Fon Bulma Paneli",
    category: "Söyleşi",
    date: "26-11-2026",
    time: "16:00",
    location: "İnovasyon Merkezi Seminer Odası",
    description: "Başarılı startup kurucularından tohum yatırım alma ve ürün pazarlama stratejileri.",
    capacity: 85,
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&auto=format&fit=crop&q=80"
  }
];
