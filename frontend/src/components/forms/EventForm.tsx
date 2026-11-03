import { useState, type FormEvent } from "react";
import type { EventFormData, Category } from "../../types/campus-event";
import { validateEvent } from "../../utils/validate-event";

interface EventFormProps {
  initialData: EventFormData;
  submitText: string;
  onSubmit: (data: EventFormData) => void;
  categories: Category[];
}

export default function EventForm({ initialData, submitText, onSubmit, categories }: EventFormProps) {
  const [data, setData] = useState<EventFormData>(initialData);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validateEvent(data);
    setErrors(found);
    if (Object.keys(found).length === 0) {
      onSubmit(data);
    }
  }

  return (
    <form className="etkinlik-formu" onSubmit={handleSubmit} noValidate>
      <div className="form-grup">
        <label htmlFor="title">Etkinlik Adı</label>
        <input
          id="title"
          name="title"
          type="text"
          value={data.title}
          onChange={handleChange}
          aria-invalid={errors.title ? true : undefined}
        />
        <span className="hata-metni">{errors.title}</span>
      </div>

      <div className="form-grup">
        <label htmlFor="category">Kategori</label>
        <select
          id="category"
          name="category"
          value={data.category}
          onChange={handleChange}
          aria-invalid={errors.category ? true : undefined}
        >
          <option value="" disabled>Seçiniz</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <span className="hata-metni">{errors.category}</span>
      </div>

      <div className="form-grup">
        <label htmlFor="date">Tarih</label>
        <input
          id="date"
          name="date"
          type="date"
          value={data.date}
          onChange={handleChange}
          aria-invalid={errors.date ? true : undefined}
        />
        <span className="hata-metni">{errors.date}</span>
      </div>

      <div className="form-grup">
        <label htmlFor="time">Saat</label>
        <input
          id="time"
          name="time"
          type="time"
          value={data.time}
          onChange={handleChange}
          aria-invalid={errors.time ? true : undefined}
        />
        <span className="hata-metni">{errors.time}</span>
      </div>

      <div className="form-grup">
        <label htmlFor="location">Yer</label>
        <input
          id="location"
          name="location"
          type="text"
          value={data.location}
          onChange={handleChange}
          aria-invalid={errors.location ? true : undefined}
        />
        <span className="hata-metni">{errors.location}</span>
      </div>

      <div className="form-grup">
        <label htmlFor="capacity">Kontenjan</label>
        <input
          id="capacity"
          name="capacity"
          type="number"
          value={data.capacity}
          onChange={handleChange}
          aria-invalid={errors.capacity ? true : undefined}
        />
        <span className="hata-metni">{errors.capacity}</span>
      </div>

      <div className="form-grup">
        <label htmlFor="description">Açıklama</label>
        <textarea
          id="description"
          name="description"
          rows={3}
          value={data.description}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn-kaydet">{submitText}</button>
    </form>
  );
}