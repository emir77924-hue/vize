import { createContext, useContext, useState, type ReactNode } from "react";
import { events as initialEvents } from "../data/events";
import type { CampusEvent, EventFormData, Category } from "../types/campus-event";

interface EventsContextType {
  events: CampusEvent[];
  addEvent: (data: EventFormData) => void;
  updateEvent: (id: string, data: EventFormData) => void;
  deleteEvent: (id: string) => void;
}

const EventsContext = createContext<EventsContextType | undefined>(undefined);

export function EventsProvider({ children }: { children: ReactNode }) {
  const [events, setEvents] = useState<CampusEvent[]>(initialEvents);

  function toEvent(id: string, data: EventFormData): CampusEvent {
    return {
      id,
      title: data.title.trim(),
      category: data.category as Category,
      date: data.date,
      time: data.time,
      location: data.location,
      description: data.description,
      capacity: Number(data.capacity),
    };
  }

  function addEvent(data: EventFormData) {
    const newEv = toEvent(`event-${Date.now()}`, data);
    setEvents((prev) => [newEv, ...prev]);
  }

  function updateEvent(id: string, data: EventFormData) {
    setEvents((prev) =>
      prev.map((e) => (e.id === id ? toEvent(id, data) : e))
    );
  }

  function deleteEvent(id: string) {
    setEvents((prev) => prev.filter((e) => e.id !== id));
  }

  return (
    <EventsContext.Provider value={{ events, addEvent, updateEvent, deleteEvent }}>
      {children}
    </EventsContext.Provider>
  );
}

export function useEvents() {
  const context = useContext(EventsContext);
  if (!context) throw new Error("useEvents must be used within an EventsProvider");
  return context;
}