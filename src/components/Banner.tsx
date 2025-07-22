import { Films } from "@/app/page";
import Image from "next/image";
import React from "react";
import chevron from "../../public/chevron.svg";
import star from "../../public/star.svg";

const Banner = ({ upcomingFilms }: { upcomingFilms: Films[] }) => {
  return (
    <div className="overflow-x-auto hidden-bar">
      <ul className="flex gap-13 w-screen">
        {upcomingFilms.map((filme) => (
          <li key={filme.id} className="w-screen shrink-0 relative">
            <Image
              src={`https://image.tmdb.org/t/p/w1280${filme.backdrop_path}`}
              alt={filme.title}
              width={1440}
              height={734}
              className="h-[75vh] w-full rounded-lg mask-b-from-45% mask-b-to-100% mask-t-from-60% mask-t-to-100% object-cover object-top"
              priority
            />
            <div className="absolute bottom-0 left-[80px] text-base-100 p-5 space-y-4">
              <h2 className="text-base-100 text-3xl font-medium">
                {filme.title}
              </h2>
              <p className="text-[16px] text-base-200 w-[32rem] line-clamp-2">
                {filme.overview}
              </p>
              <div className="flex gap-2 *:bg-base-800/10 *:py-1 *:px-2 *:rounded-[6px] *:border *:border-base-400">
                <div className="flex items-center gap-1">
                  <span>
                    <Image src={star} alt=">" />
                  </span>
                  <p>{filme.vote_average.toFixed(1)}</p>
                </div>
                <div>drama</div>
                <div>filme</div>
              </div>
              <div className="flex gap-3">
                <button className="text-base-800 bg-base-100 px-3 py-2 rounded-[100px] hover:cursor-pointer">
                  + Adicionar a sua lista
                </button>
                <button className="text-base-100 bg-base-600 px-3 py-2 rounded-[100px] hover:cursor-pointer flex items-center gap-2">
                  Detalhes
                  <span>
                    <Image src={chevron} alt=">" />
                  </span>
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Banner;
