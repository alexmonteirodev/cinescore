import { API_KEY } from "@/api/options";

export default async function getUpcomingFilms() {
  try {
    const r = await fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}",
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: "Bearer " + API_KEY,
        },
        next: { revalidate: 3600 },
      }
    );

    const data = await r.json();
    return data.results || [];
  } catch (err) {
    console.error("Erro ao buscar filmes:", err);
  }
}
