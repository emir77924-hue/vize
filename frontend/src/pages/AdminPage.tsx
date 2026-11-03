import { Link } from "react-router-dom";
import { useEvents } from "../context/EventsContext";

export default function AdminPage() {
  const { events, deleteEvent } = useEvents();

  function handleDelete(id: string, title: string) {
    if (window.confirm(`"${title}" silinsin mi?`)) {
      deleteEvent(id);
    }
  }

  return (
    <section>
      <h2>Etkinlik Yönetimi</h2>
      <Link to="/admin/new" className="btn-guncelle" style={{ display: "inline-block", margin: "1rem 0", textDecoration: "none" }}>
        + Yeni etkinlik
      </Link>
      <table className="tablo" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "var(--renk-ana)", color: "#fff" }}>
            <th style={{ padding: "10px", textAlign: "left" }}>Etkinlik</th>
            <th style={{ padding: "10px", textAlign: "left" }}>Tarih</th>
            <th style={{ padding: "10px", textAlign: "left" }}>Kategori</th>
            <th style={{ padding: "10px", textAlign: "left" }}>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {events.map((ev) => (
            <tr key={ev.id} style={{ borderBottom: "1px solid #ddd" }}>
              <td data-baslik="Etkinlik" style={{ padding: "10px" }}>{ev.title}</td>
              <td data-baslik="Tarih" style={{ padding: "10px" }}>{ev.date}</td>
              <td data-baslik="Kategori" style={{ padding: "10px" }}>{ev.category}</td>
              <td data-baslik="İşlemler" style={{ padding: "10px", display: "flex", gap: "8px" }}>
                <Link to={`/admin/${ev.id}/edit`} style={{ background: "var(--renk-ana)", color: "#fff", padding: "6px 12px", borderRadius: "6px", textDecoration: "none" }}>
                  Düzenle
                </Link>
                <button onClick={() => handleDelete(ev.id, ev.title)} className="buton-sil" style={{ background: "var(--renk-hata, #b82525)", color: "#fff", border: "none", padding: "6px 12px", borderRadius: "6px", cursor: "pointer" }}>
                  Sil
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}