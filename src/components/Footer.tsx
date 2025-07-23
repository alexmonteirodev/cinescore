import React from "react";
import qrcode from "../../public/qrcode.svg";
import storeslogos from "../../public/storeslogos.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="text-white flex justify-between mx-20 mb-25">
      <div className="flex gap-14">
        <h1 className="font-bold text-2xl">CineScore</h1>
        <div>
          <ul className="space-y *:cursor-pointer *:hover:text-base-100">
            <li className="font-medium text-base-100">Sitemap</li>
            <li className="font-regular text-base-300">Categorias</li>
            <li className="font-regular text-base-300">Suas séries</li>
            <li className="font-regular text-base-300">Suas listas</li>
            <li className="font-regular text-base-300">Comunidade</li>
          </ul>
        </div>
        <div>
          <ul className="space-y *:cursor-pointer *:hover:text-base-100">
            <li className="font-medium text-base-100">A empresa</li>
            <li className="font-regular text-base-300">Sobre a empresa</li>
            <li className="font-regular text-base-300">
              Regras de privacidade
            </li>
            <li className="font-regular text-base-300">Termos de uso</li>
          </ul>
        </div>
        <div>
          <ul className="space-y *:cursor-pointer *:hover:text-base-100">
            <li className="font-medium text-base-100">Contato</li>
            <li className="font-regular text-base-300">Envie um email</li>
            <li className="font-regular text-base-300">Imprensa</li>
          </ul>
        </div>
        <div>
          <ul className="space-y *:cursor-pointer *:hover:text-base-100">
            <li className="font-medium text-base-100">Redes sociais</li>
            <li className="font-regular text-base-300">Instagram</li>
            <li className="font-regular text-base-300">Youtube</li>
            <li className="font-regular text-base-300">Twitter</li>
          </ul>
        </div>
      </div>
      <div className="flex gap-12">
        <div className="space-y-4">
          <div>
            <span>
              <Image src={storeslogos} alt=">" />
            </span>
          </div>
          <div>
            <ul>
              <li className="font-medium text-base-100">Baixe nosso App</li>
              <li className="font-regular text-base-300">
                Grátis para IOS e Android
              </li>
            </ul>
          </div>
        </div>
        <div>
          <span>
            <Image
              src={qrcode}
              alt=">"
              className="bg-base-100 p-1 rounded-[6px]"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
