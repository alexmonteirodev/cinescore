import { API_KEY } from "@/api/options";

export default async function GET_UPCOMING() {
  try {
    const r = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=pt-BR&page=1",
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: "Bearer " + API_KEY,
        },
      }
    );

    const data = await r.json();
    return data;
  } catch (err) {
    console.error("Erro ao buscar filmes:", err);
  }
}
