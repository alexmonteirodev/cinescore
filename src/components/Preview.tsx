import Image from "next/image";
import React from "react";
import { Films } from "@/app/page";

const Preview = ({ upcomingFilms }: { upcomingFilms: Films[] }) => {
  return (
    <div className="relative">
      <div className="overflow-x-auto hidden-bar">
        <ul className="flex gap-3 pl-3 py-3 w-max border-y border-base-500 ">
          {upcomingFilms.map((filme) => (
            <li key={filme.id} className="shrink-0">
              <Image
                className="w-[110px] h-[64px] rounded-[8px] object-cover border border-base-600"
                src={`https://image.tmdb.org/t/p/w500${filme.backdrop_path}`}
                alt={filme.title}
                width={500}
                height={281}
              />
            </li>
          ))}
        </ul>
      </div>
      <span className="h-24 w-[56px] absolute right-0 top-0 bg-gradient-to-l from-base-800 to-transparent"></span>
    </div>
  );
};

export default Preview;
