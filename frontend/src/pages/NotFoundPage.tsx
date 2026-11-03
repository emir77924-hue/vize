import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section style={{ textAlign: "center", padding: "3rem 0" }}>
      <h2>Sayfa bulunamadı</h2>
      <p style={{ margin: "1rem 0", color: "#666" }}>Aradığınız sayfa ya da etkinlik yok.</p>
      <Link to="/" className="btn-kaydet" style={{ display: "inline-block", textDecoration: "none" }}>
        Ana sayfaya dön
      </Link>
    </section>
  );
}