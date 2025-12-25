import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "1rem",
        padding: "1rem",
        background: "#222",
        color: "#fff",
      }}
    >
      <Link style={{ color: "#fff", textDecoration: "none" }} to="/">
        Home
      </Link>
      <Link style={{ color: "#fff", textDecoration: "none" }} to="/anime">
        Top Anime
      </Link>
    </nav>
  );
}
