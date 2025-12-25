import { useEffect, useState } from "react";
import { fetchTopAnime } from "../services/animeApi.js";
import AnimeCard from "../components/AnimeCard.jsx";

export default function AnimeList() {
  const [anime, setAnime] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTopAnime().then((data) => {
      setAnime(data);
      setLoading(false);
    });
  }, []);

  if (loading)
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        Loading top anime...
      </div>
    );

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "1rem",
        padding: "1rem",
      }}
    >
      {anime.map((a) => (
        <AnimeCard key={a.mal_id} anime={a} />
      ))}
    </div>
  );
}
