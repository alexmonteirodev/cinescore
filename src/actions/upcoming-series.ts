import { API_KEY } from "@/api/options";

export default async function getUpcomingSeries() {
  try {
    const r = await fetch(
      "https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&page=1&sort_by=vote_average.desc&vote_count.gte=200",
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
    console.error("Erro ao buscar series:", err);
  }
}
