import { NavLink } from "react-router-dom";

export default function Navigation() {
  const menu = [
    { to: "/", label: "Ana Sayfa" },
    { to: "/events", label: "Etkinlikler" },
    { to: "/admin", label: "Yönetim" },
    { to: "/login", label: "Giriş" },
  ];

  return (
    <nav className="ana-navigasyon" style={{ background: "var(--renk-koyu, #2d3748)", padding: "0.75rem 1.5rem", display: "flex", gap: "1.2rem" }}>
      {menu.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.to === "/"}
          className={({ isActive }) => (isActive ? "aktif-link" : "")}
          style={({ isActive }) => ({
            color: isActive ? "#fff" : "rgba(255, 255, 255, 0.8)",
            textDecoration: "none",
            fontWeight: isActive ? "bold" : "normal",
            padding: "0.25rem 0.5rem",
            borderRadius: "4px",
            background: isActive ? "rgba(255, 255, 255, 0.15)" : "transparent",
          })}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}