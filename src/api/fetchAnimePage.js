import { api } from "./api";

export const fetchAnimePage = async (page = 1) => {
  const res = await api.get("/anime", {
    params: {
      page,
      limit: 25,
    },
  });

  return res.data;
};
