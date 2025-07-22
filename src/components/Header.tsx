import React from "react";
import searchIcon from "../../public/search.svg";
import arrow from "../../public/arrow.svg";

import Image from "next/image";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="flex gap-20 justify-center items-center">
        <h1 className="text-base-100 text-2xl font-bold">CineScore</h1>
        <nav>
          <ul className="flex gap-6 *:hover:text-base-100 *:hover:cursor-pointer">
            <li className="text-base-100">Home</li>
            <li className="text-base-200">Categorias</li>
            <li className="text-base-200">Suas Sérires</li>
            <li className="text-base-200">Suas Listas</li>
            <li className="text-base-200">Comunidade</li>
          </ul>
        </nav>
      </div>
      <div className="flex gap-3">
        <div className="relative w-[320px] flex gap-2 bg-base-500 rounded-full">
          <input
            type="search"
            className=" text-base-200 py-1 pl-3 w-full border rounded-full border-base-600"
            placeholder="Pesquise por uma série ou filme"
          />
          <div className="bg-base-100 absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2">
            <Image src={searchIcon} alt="search.svg" width={12} height={12} />
          </div>
        </div>
        <button className="text-base-100 flex gap-2 items-center bg-base-500 py-2 px-3 rounded-full cursor-pointer border border-base-600">
          <span>
            <Image src={arrow} alt="" />
          </span>
          Acesso
        </button>
      </div>
    </div>
  );
};

export default Header;
