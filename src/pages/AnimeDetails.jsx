import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchAnimeById } from "../services/animeApi.js";

export default function AnimeDetails() {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAnimeById(id).then((data) => {
      setAnime(data);
      setLoading(false);
    });
  }, [id]);

  if (loading)
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        Loading anime details...
      </div>
    );
  if (!anime)
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        Anime not found
      </div>
    );

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "2rem auto",
        padding: "1rem",
        textAlign: "center",
      }}
    >
      <h2>{anime.title}</h2>
      <img
        src={anime.images.jpg.large_image_url}
        alt={anime.title}
        style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }}
      />
      <p>{anime.synopsis}</p>
      <p>
        <strong>Episodes:</strong> {anime.episodes}
      </p>
      <p>
        <strong>Score:</strong> {anime.score}
      </p>
      <p>
        <strong>Status:</strong> {anime.status}
      </p>
    </div>
  );
}
