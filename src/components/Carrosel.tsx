import Image from "next/image";
import React from "react";
import chevron from "../../public/chevron.svg";

const Carrosel = ({ carroselTitle }: { carroselTitle: string }) => {
  return (
    <div className="text-white ml-20 mt-5">
      <div className="flex items-center gap-2">
        <h2 className="text-[20px] font-medium">{carroselTitle}</h2>
        <span>
          <Image src={chevron} alt=">" />
        </span>
      </div>
      <div></div>
    </div>
  );
};

export default Carrosel;
