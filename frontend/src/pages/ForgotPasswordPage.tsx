import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) {
      setError("Geçerli bir e-posta girin.");
      setSent(false);
    } else {
      setError("");
      setSent(true);
    }
  }

  return (
    <section style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h2>Şifremi Unuttum</h2>
      <p style={{ color: "#555", marginBottom: "1rem" }}>Kayıtlı e-posta adresinizi yazın, şifre yenileme bağlantısı gönderelim.</p>
      <form className="etkinlik-formu" onSubmit={handleSubmit} noValidate>
        <div className="form-grup">
          <label>E-posta</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} aria-invalid={!!error} />
          <span className="hata-metni">{error}</span>
        </div>
        <button type="submit" className="btn-kaydet">Bağlantı gönder</button>
        {sent && <p className="mesaj mesaj-basari" style={{ marginTop: "10px" }}>Bağlantı {email} adresine gönderildi (demo).</p>}
      </form>
      <div style={{ marginTop: "1rem" }}>
        <Link to="/login">← Girişe dön</Link>
      </div>
    </section>
  );
}