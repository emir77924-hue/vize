import { useNavigate } from "react-router-dom";
import { useEvents } from "../context/EventsContext";
import EventForm from "../components/forms/EventForm";
import type { EventFormData, Category } from "../types/campus-event";

export default function AddEventPage() {
  const { addEvent } = useEvents();
  const navigate = useNavigate();

  const emptyForm: EventFormData = {
    title: "",
    category: "",
    date: "",
    time: "",
    location: "",
    capacity: "",
    description: "",
  };

  const categories: Category[] = ["Seminer", "Atölye", "Söyleşi", "Yarışma"];

  return (
    <section style={{ maxWidth: "500px", margin: "0 auto" }}>
      <h2>Etkinlik Ekle</h2>
      <EventForm
        initialData={emptyForm}
        submitText="Kaydet"
        categories={categories}
        onSubmit={(data) => {
          addEvent(data);
          navigate("/admin");
        }}
      />
    </section>
  );
}