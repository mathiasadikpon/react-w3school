import { useEffect, useState } from "react";
import AnimeCard from "../components/AnimeCard.jsx";
import { fetchTopAnime } from "../services/animeApi.js";

export default function AnimeList() {
  const [anime, setAnime] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTopAnime().then((data) => {
      setAnime(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Loading top anime...</div>;

  return (
    <div className="anime-list">
      {anime.map((a) => (
        <AnimeCard key={a.mal_id} anime={a} />
      ))}
    </div>
  );
}
