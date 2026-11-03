import { useNavigate, useParams } from "react-router-dom";
import { useEvents } from "../context/EventsContext";
import EventForm from "../components/forms/EventForm";
import NotFoundPage from "./NotFoundPage";
import { findEventById } from "../utils/filter-events";
import type { Category, EventFormData } from "../types/campus-event";

export default function EditEventPage() {
  const { id } = useParams();
  const { events, updateEvent } = useEvents();
  const navigate = useNavigate();

  const event = findEventById(events, id ?? "");
  if (!event) return <NotFoundPage />;

  const initialData: EventFormData = {
    title: event.title,
    category: event.category,
    date: event.date,
    time: event.time,
    location: event.location,
    capacity: String(event.capacity),
    description: event.description,
  };

  const categories: Category[] = ["Seminer", "Atölye", "Söyleşi", "Yarışma"];

  return (
    <section style={{ maxWidth: "500px", margin: "0 auto" }}>
      <h2>Etkinlik Güncelle</h2>
      <EventForm
        initialData={initialData}
        submitText="Güncelle"
        categories={categories}
        onSubmit={(data) => {
          updateEvent(event.id, data);
          navigate("/admin");
        }}
      />
    </section>
  );
}