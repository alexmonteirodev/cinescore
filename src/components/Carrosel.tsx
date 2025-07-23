import Image from "next/image";
import React from "react";
import chevron from "../../public/chevron.svg";
import play from "../../public/play.svg";
import { Series } from "@/app/page";

type Carrosel = {
  carroselTitle: string;
  carroselPictures: Series[];
};

const Carrosel = ({ carroselTitle, carroselPictures }: Carrosel) => {
  return (
    <div className=" ml-25 mt-5 space-y-3">
      <div className="flex items-center gap-2">
        <h2 className="text-base-100 text-[20px] font-medium">
          {carroselTitle}
        </h2>
        <span>
          <Image src={chevron} alt=">" />
        </span>
      </div>
      <div className="relative">
        <div className="overflow-x-auto hidden-bar ">
          <ul className="flex gap-6 py-3 w-max  ">
            {carroselPictures.map((filme) => (
              <li key={filme.id} className="relative">
                <Image
                  className="w-[302px] h-[170px] rounded-[8px] object-cover border border-base-600 cursor-pointer"
                  src={`https://image.tmdb.org/t/p/w500${filme.backdrop_path}`}
                  alt="img"
                  width={500}
                  height={281}
                  title={filme.name || filme.title}
                />
                <div className="bg-base-100 rounded-[6px] items-center gap-1 inline-flex px-2 py-1 absolute bottom-2 left-2">
                  <span>
                    <Image src={play} alt="play.svg" />
                  </span>
                  <p>{filme.popularity.toFixed(3)}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <span className="h-[200px] w-[56px] absolute right-0 top-0 bg-gradient-to-l from-base-800 to-transparent"></span>
      </div>
    </div>
  );
};

export default Carrosel;
