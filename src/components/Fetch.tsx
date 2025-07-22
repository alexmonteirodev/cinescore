"use client";
import GET_UPCOMING from "@/actions/upcoming-films";
import React from "react";

export type Films = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export default function Fetch() {
  const [upcomingFilms, setUpcomingFilms] = React.useState<Films[]>([]);

  React.useEffect(() => {
    GET_UPCOMING().then((data) => {
      setUpcomingFilms(data.results || []);
    });
  }, []);

  console.log("filmes: ", upcomingFilms);
  return (
    <div>
      <h1>Filmes Populares</h1>
      <ul>
        {upcomingFilms.map((filme) => (
          <li className="text-base-100" key={filme.id}>
            {filme.title} — ⭐ {filme.vote_average}
          </li>
        ))}
      </ul>
    </div>
  );
}
