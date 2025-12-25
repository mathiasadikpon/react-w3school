import { Link } from "react-router-dom";

export default function AnimeCard({ anime }) {
  return (
    <div
      style={{
        width: "200px",
        margin: "1rem",
        textAlign: "center",
        border: "1px solid #ccc",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      <img
        src={anime.images.jpg.image_url}
        alt={anime.title}
        style={{ width: "100%", height: "300px", objectFit: "cover" }}
      />
      <h3>{anime.title}</h3>
      <Link to={`/anime/${anime.mal_id}`}>View Details</Link>
    </div>
  );
}
