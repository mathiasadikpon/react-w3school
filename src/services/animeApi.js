import axios from "axios";

const API_BASE = "https://api.jikan.moe/v4";

export const fetchTopAnime = async () => {
  const response = await axios.get(`${API_BASE}/top/anime`);
  return response.data.data;
};

export const fetchAnimeById = async (id) => {
  const response = await axios.get(`${API_BASE}/anime/${id}`);
  return response.data.data;
};

export const searchAnime = async (query) => {
  const response = await axios.get(`${API_BASE}/anime`, {
    params: { q: query, limit: 20 },
  });
  return response.data.data;
};
