import type { CampusEvent } from "../../types/campus-event";
import EventCard from "./EventCard";

export default function EventList({ events }: { events: CampusEvent[] }) {
  if (events.length === 0) {
    return <p className="sonuc-bilgisi">Aramanıza uygun etkinlik bulunamadı.</p>;
  }

  return (
    <div className="etkinlikler-izgara">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}