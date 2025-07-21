"use client";
import GET_UPCOMING from "@/actions/upcoming";
import Image from "next/image";
import React from "react";
type Films = {
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

const Preview = () => {
  const [upcomingFilms, setUpcomingFilms] = React.useState<Films[]>([]);

  React.useEffect(() => {
    GET_UPCOMING().then((data) => {
      setUpcomingFilms(data.results || []);
    });
  }, []);
  console.log(upcomingFilms);

  return (
    <div className="overflow-x-auto">
      <ul className="flex gap-3 pl-3 py-3 w-max border-y border-base-500">
        {upcomingFilms.map((filme) => (
          <li key={filme.id} className="shrink-0">
            <Image
              className="w-[110px] h-[64px] rounded-[8px] object-cover"
              src={`https://image.tmdb.org/t/p/w500${filme.backdrop_path}`}
              alt={filme.title}
              width={500}
              height={281}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Preview;
