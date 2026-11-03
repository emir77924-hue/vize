import { useState } from "react";
import { useEvents } from "../context/EventsContext";
import EventFilter from "../components/events/EventFilter";
import EventList from "../components/events/EventList";
import { searchEvents, filterByCategory } from "../utils/filter-events";
import type { Category } from "../types/campus-event";

export default function EventsPage() {
  const { events } = useEvents();
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState<Category | "">("");

  const categories: Category[] = ["Seminer", "Atölye", "Söyleşi", "Yarışma"];
  const filtered = filterByCategory(searchEvents(events, searchText), category);

  return (
    <section>
      <EventFilter
        searchText={searchText}
        onSearchChange={setSearchText}
        selectedCategory={category}
        onCategoryChange={setCategory}
        categories={categories}
      />
      <p className="sonuc-bilgisi">{filtered.length} etkinlik listeleniyor.</p>
      <EventList events={filtered} />
    </section>
  );
}