import { API_KEY } from "@/api/options";
import { Films } from "@/app/page";

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
    const films = data.results || [];

    const filmsWithRuntime = await Promise.all(
      films.map(async (film: Films) => {
        try {
          const res = await fetch(
            `https://api.themoviedb.org/3/movie/${film.id}`,
            {
              headers: {
                accept: "application/json",
                Authorization: "Bearer " + API_KEY,
              },
              next: { revalidate: 3600 },
            }
          );
          const details = await res.json();
          return { ...film, runtime: details.runtime || null };
        } catch {
          return { ...film, runtime: null };
        }
      })
    );

    return filmsWithRuntime;
  } catch (err) {
    console.error("Erro ao buscar filmes:", err);
    return [];
  }
}

// const runtime = await runTimeFilm(1087192);
// console.log("runtime", runtime);
