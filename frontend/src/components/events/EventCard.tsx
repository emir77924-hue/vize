import { Link } from "react-router-dom";
import type { CampusEvent } from "../../types/campus-event";

export default function EventCard({ event }: { event: CampusEvent }) {
  return (
    <article className="etkinlik-karti">
      <h3>{event.title}</h3>
      <p className="kategori">{event.category}</p>
      <p className="tarih">{event.date}, {event.time}</p>
      <p className="konum">Yer: {event.location}</p>
      <p className="kontenjan">Kontenjan: {event.capacity} kişi</p>
      <p className="aciklama-kisa">{event.description}</p>
      <Link to={`/events/${event.id}`} className="detay-link">
        Detayları gör &rarr;
      </Link>
    </article>
  );
}