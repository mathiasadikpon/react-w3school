import React, { useEffect, useState } from "react";
import { fetchTopAnime } from "../services/animeApi";
import AnimeCard from "../components/AnimeCard";

const Home = () => {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    fetchTopAnime().then(setAnimeList);
  }, []);

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {animeList.map((anime) => (
        <AnimeCard key={anime.mal_id} anime={anime} />
      ))}
    </div>
  );
};

export default Home;
