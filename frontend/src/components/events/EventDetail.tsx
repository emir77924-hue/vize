import { Link } from "react-router-dom";
import type { CampusEvent } from "../../types/campus-event";

interface EventDetailProps {
  event: CampusEvent;
}

export default function EventDetail({ event }: EventDetailProps) {
  return (
    <article className="detay-grid">
      <div className="kunye-alani" style={{ width: "100%" }}>
        <h3>Etkinlik Künyesi</h3>
        <dl>
          <dt>Tarih</dt>
          <dd>{event.date}, {event.time}</dd>
          <dt>Yer</dt>
          <dd>{event.location}</dd>
          <dt>Kategori</dt>
          <dd>{event.category}</dd>
          <dt>Kontenjan</dt>
          <dd>{event.capacity} kişi</dd>
        </dl>
        <h3>Açıklama</h3>
        <p className="aciklama">{event.description}</p>
        <div className="detay-aksiyonlar" style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
          <Link to="/events" className="btn-aksiyon" style={{ textDecoration: "none" }}>
            ← Listeye dön
          </Link>
          <Link to={`/admin/${event.id}/edit`} className="btn-guncelle" style={{ textDecoration: "none" }}>
            Bu etkinliği güncelle
          </Link>
        </div>
      </div>
    </article>
  );
}