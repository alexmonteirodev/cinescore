"use client";
import { Films } from "@/app/page";
import Image from "next/image";
import React from "react";
import chevron from "../../public/chevron.svg";
import chevronBlack from "../../public/chevro-black.svg";
import star from "../../public/star.svg";

const genreMap: Record<number, string> = {
  28: "Ação",
  12: "Aventura",
  16: "Animação",
  35: "Comédia",
  80: "Crime",
  99: "Documentário",
  18: "Drama",
  10751: "Família",
  14: "Fantasia",
  36: "História",
  27: "Terror",
  10402: "Música",
  9648: "Mistério",
  10749: "Romance",
  878: "Ficção Científica",
  10770: "Cinema TV",
  53: "Thriller",
  10752: "Guerra",
  37: "Faroeste",
  // Gêneros específicos para séries de TV:
  10759: "Ação & Aventura (TV)",
  10762: "Crianças (TV)",
  10763: "Notícias (TV)",
  10764: "Reality (TV)",
  10765: "Sci-Fi & Fantasia (TV)",
  10766: "Soap (TV)",
  10767: "Talk (TV)",
  10768: "Guerra & Política (TV)",
};

const Banner = ({ upcomingFilms }: { upcomingFilms: Films[] }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [slideTransition, setSlideTransition] = React.useState(false);

  const next = () => {
    setCurrentIndex((prev) =>
      prev >= upcomingFilms.length - 1 ? 0 : prev + 1
    );
  };

  // React.useEffect(() => {
  //   const interval = setInterval(() => {
  //     next();
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, [currentIndex]);
  React.useEffect(() => {
    const transitionTimeout = setTimeout(() => {
      setSlideTransition(true); // Começa animação 200ms antes
    }, 4800);

    const changeTimeout = setTimeout(() => {
      next(); // Troca imagem
      setTimeout(() => setSlideTransition(false), 300); // Espera transição acabar antes de resetar
    }, 5000);

    return () => {
      clearTimeout(transitionTimeout);
      clearTimeout(changeTimeout);
    };
  }, [currentIndex]);

  function formatRuntime(runtime: number): string {
    if (!runtime || runtime <= 0) return "Tempo desconhecido";

    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;

    return `${hours}h · ${minutes}min`;
  }
  const nextIndex =
    currentIndex >= upcomingFilms.length - 1 ? 0 : currentIndex + 1;

  const nextFilm = upcomingFilms[nextIndex];

  // React.useEffect(() => {
  //   setSlideTransition(true);

  //   const timeout = setTimeout(() => {
  //     setSlideTransition(false);
  //   }, 200);

  //   return () => clearTimeout(timeout);
  // }, [currentIndex]);

  return (
    <div className="relative overflow-hidden w-full h-[75vh]">
      <ul
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {upcomingFilms.map((filme, i) => (
          <li key={i} className="w-full flex-shrink-0 relative">
            <Image
              src={`https://image.tmdb.org/t/p/w1280${filme.backdrop_path}`}
              alt={filme.title}
              width={1440}
              height={734}
              className="h-[75vh] w-full rounded-lg mask-b-from-45% mask-b-to-100% mask-t-from-60% mask-t-to-100% object-cover object-top"
              priority
            />
            <div className="absolute bottom-0 left-[80px] text-white p-5 space-y-4">
              <h2 className="text-base-100 text-3xl font-medium">
                {filme.title}
              </h2>
              <p className="text-[16px] text-base-200 w-[32rem] line-clamp-2">
                {filme.overview}
              </p>
              <div className="flex gap-2 *:bg-base-800/10 *:py-1 *:px-2 *:rounded-[6px] *:border *:border-base-400">
                <div className="flex items-center gap-1">
                  <Image src={star} alt=">" />
                  <p>{filme.vote_average.toFixed(1)}</p>
                </div>
                <div>{genreMap[filme.genre_ids[0]] ?? "Desconhecido"}</div>
                <div>{formatRuntime(filme.runtime ?? 0)}</div>
              </div>
              <div className="flex gap-3">
                <button className="text-base-800 bg-base-100 px-3 py-2 rounded-[100px] hover:cursor-pointer font-bold">
                  + Adicionar a sua lista
                </button>
                <button className="text-base-100 bg-base-600 px-3 py-2 rounded-[100px] hover:cursor-pointer flex items-center gap-2">
                  Detalhes
                  <Image src={chevron} alt=">" />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <button
        className="h-10 w-10 bg-base-100 rounded-full flex items-center justify-center absolute top-[50%] left-[85%] cursor-pointer"
        onClick={next}
      >
        <Image src={chevronBlack} alt=">" />
      </button>
      <Image
        src={`https://image.tmdb.org/t/p/w1280${nextFilm.backdrop_path}`}
        alt={nextFilm.title}
        width={1440}
        height={734}
        className={`h-[400px] w-[120px] rounded-l-[12px] absolute bottom-1/2 translate-y-1/2 object-cover right-0 transition-all duration-700 ease-in-out shadow-2xl shadow-base-800
    ${slideTransition ? "" : ""}
    
  `}
        style={{
          transform: slideTransition ? "scale(1.4)" : "scale(1)",
          opacity: slideTransition ? 0 : 1,
        }}
        priority
      />
    </div>
  );
};

export default Banner;

// return (
//     <div className="overflow-x-auto hidden-bar snap-x snap-mandatory">
//       <ul className="flex gap-13 w-screen">
//         {upcomingFilms.map((filme, i) => (
//           <li key={i} className="w-screen shrink-0 relative snap-start">
//             <Image
//               src={`https://image.tmdb.org/t/p/w1280${filme.backdrop_path}`}
//               alt={filme.title}
//               width={1440}
//               height={734}
//               className="h-[75vh] w-full rounded-lg mask-b-from-45% mask-b-to-100% mask-t-from-60% mask-t-to-100% object-cover object-top"
//               priority
//             />
//             <div className="absolute bottom-0 left-[80px] text-base-100 p-5 space-y-4">
//               <h2 className="text-base-100 text-3xl font-medium">
//                 {filme.title}
//               </h2>
//               <p className="text-[16px] text-base-200 w-[32rem] line-clamp-2">
//                 {filme.overview}
//               </p>
//               <div className="flex gap-2 *:bg-base-800/10 *:py-1 *:px-2 *:rounded-[6px] *:border *:border-base-400">
//                 <div className="flex items-center gap-1">
//                   <span>
//                     <Image src={star} alt=">" />
//                   </span>
//                   <p>{filme.vote_average.toFixed(1)}</p>
//                 </div>
//                 <div>drama</div>
//                 <div>filme</div>
//               </div>
//               <div className="flex gap-3">
//                 <button className="text-base-800 bg-base-100 px-3 py-2 rounded-[100px] hover:cursor-pointer">
//                   + Adicionar a sua lista
//                 </button>
//                 <button className="text-base-100 bg-base-600 px-3 py-2 rounded-[100px] hover:cursor-pointer flex items-center gap-2">
//                   Detalhes
//                   <span>
//                     <Image src={chevron} alt=">" />
//                   </span>
//                 </button>
//               </div>
//             </div>
//             <button className="h-10 w-10 bg-base-100 rounded-full flex items-center justify-center fixed top-[467px] left-[85%] cursor-pointer">
//               <Image src={chevronBlack} alt=">" onClick={next} />
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
