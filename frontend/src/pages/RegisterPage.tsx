import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string; password?: string; passwordConfirm?: string }>({});
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const found: { name?: string; email?: string; password?: string; passwordConfirm?: string } = {};
    if (name.trim().length < 3) found.name = "En az 3 karakter olmalı.";
    if (!email.includes("@")) found.email = "Geçerli e-posta girin.";
    if (password.length < 6) found.password = "En az 6 karakter olmalı.";
    if (passwordConfirm !== password) found.passwordConfirm = "Şifreler aynı değil.";
    setErrors(found);
    setSent(Object.keys(found).length === 0);
  }

  return (
    <section style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h2>Kayıt Ol</h2>
      <form className="etkinlik-formu" onSubmit={handleSubmit} noValidate>
        <div className="form-grup">
          <label>Ad Soyad</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} aria-invalid={!!errors.name} />
          <span className="hata-metni">{errors.name}</span>
        </div>
        <div className="form-grup">
          <label>E-posta</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} aria-invalid={!!errors.email} />
          <span className="hata-metni">{errors.email}</span>
        </div>
        <div className="form-grup">
          <label>Şifre</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} aria-invalid={!!errors.password} />
          <span className="hata-metni">{errors.password}</span>
        </div>
        <div className="form-grup">
          <label>Şifre (tekrar)</label>
          <input type="password" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} aria-invalid={!!errors.passwordConfirm} />
          <span className="hata-metni">{errors.passwordConfirm}</span>
        </div>
        <button type="submit" className="btn-kaydet">Kayıt ol</button>
        {sent && <p style={{ color: "green", marginTop: "10px" }}>Kayıt başarılı (demo)</p>}
      </form>
      <div style={{ marginTop: "1rem" }}>
        <Link to="/login">Zaten hesabın var mı? Giriş yap</Link>
      </div>
    </section>
  );
}