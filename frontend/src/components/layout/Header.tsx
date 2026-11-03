export default function Header() {
  return (
    <header className="header-alani" style={{ background: "var(--renk-ana)", color: "#fff", padding: "1.5rem", borderRadius: "8px 8px 0 0" }}>
      <h1 style={{ margin: 0, fontSize: "1.8rem" }}>Kampüs Etkinlikleri</h1>
      <p style={{ margin: "0.5rem 0 0 0", opacity: 0.9, fontSize: "0.95rem" }}>
        Fakültedeki seminer, atölye ve söyleşileri tek yerden takip edin.
      </p>
    </header>
  );
}