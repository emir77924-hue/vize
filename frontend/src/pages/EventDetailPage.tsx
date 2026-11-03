import { useParams } from "react-router-dom";
import { useEvents } from "../context/EventsContext";
import EventDetail from "../components/events/EventDetail";
import NotFoundPage from "./NotFoundPage";
import { findEventById } from "../utils/filter-events";

export default function EventDetailPage() {
  const { id } = useParams();
  const { events } = useEvents();

  // ID yoksa veya listede bu ID'ye sahip etkinlik bulunamazsa güvenli bir şekilde NotFoundPage dön
  const event = id ? findEventById(events, id) : undefined;

  if (!event) {
    return <NotFoundPage />;
  }

  return <EventDetail event={event} />;
}