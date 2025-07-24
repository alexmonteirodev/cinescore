import getPopulares from "@/actions/populares";
import getUpcomingFilms from "@/actions/upcoming-films";
import getUpcomingSeries from "@/actions/upcoming-series";
import Banner from "@/components/Banner";
import Carrosel from "@/components/Carrosel";
import Footer from "@/components/Footer";
import Preview from "@/components/Preview";
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
  runtime?: number;
};

export type Series = {
  adult: false;
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  title?: string;
};

export default async function Home() {
  const upcomingFilms = await getUpcomingFilms();
  const upcomingSeries = await getUpcomingSeries();
  const populares = await getPopulares();

  // console.log("filmes: ", upcomingFilms);
  // console.log("Series: ", upcomingSeries);
  // console.log("populares: ", populares);

  return (
    <main>
      <Preview upcomingFilms={upcomingFilms} />
      <Banner upcomingFilms={upcomingFilms} />
      <Carrosel
        carroselTitle={"Séries mais assistidas da semana"}
        carroselPictures={upcomingSeries}
      />
      <Carrosel
        carroselTitle={"Tendências recentes"}
        carroselPictures={populares}
      />
      <hr className="text-base-500 my-20" />
      <Footer />
    </main>
  );
}
