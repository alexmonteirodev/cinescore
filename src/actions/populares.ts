import { API_KEY } from "@/api/options";

export default async function getPopulares() {
  try {
    const r = await fetch(
      "https://api.themoviedb.org/3/person/popular?language=en-US&page=1",
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
