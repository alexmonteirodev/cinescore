"use client";
import GET_UPCOMING from "@/actions/upcoming";
import React from "react";

export default function Teste() {
  const [upcomingFilms, setUpcomingFilms] = React.useState([]);

  React.useEffect(() => {
    GET_UPCOMING().then((data) => {
      setUpcomingFilms(data.results || []);
    });
  }, []);

  console.log(upcomingFilms);
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
