import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

const BigOffers = () => {
  return (
    <div className="w-full min-vh-65-8 flex justify-center">
      <div className="w-85 flex justify-center items-center gap-9 ">
        <div className="relative">
          <LazyLoadImage src="/img/pastas.webp" effect="opacity" />
          <div
            className="absolute top-0 right-0 bottom-0 left-0
          flex justify-center items-center 
          "
          >
            <div className="w-3/5 mb-4 flex flex-col gap-2">
              <h4 className="text-lg font-bold">Sabor de Italia</h4>
              <p className="text-3xl font-semibold">gran ofertas en tus</p>
              <p className="text-6xl font-semibold">Pastas favoritas</p>
              <button className="w-2/6 mt-2 p-2 custom-red rounded-full text-white text-xs">
                Comprar ahora
              </button>
            </div>
          </div>
        </div>
        <div className="relative ">
          <LazyLoadImage src="/img/cereals.webp" effect="opacity" />
          <div
            className="absolute top-0 right-0 bottom-0 left-0 
          flex justify-center items-center
          "
          >
            <div className="w-3/6 flex flex-col justify-center gap-2  relative">
              <p className="text-lg font-bold">Oferta de la semana</p>
              <span className="text-8xl">-30%</span>
              <p className="text-2xl font-bold">Cereales selectos</p>
              <button className="w-2/6 mt-2 p-2 custom-red rounded-full text-white text-xs">
                Comprar ahora
              </button>
              <div
                className="absolute top-0 right-0 rotate-12 w-20 h-20 custom-red rounded-full text-center
              flex justify-center items-center 
              "
              >
                <span
                  className="text-center text-white text-lg 
                leading-5
                font-semibold"
                >
                  Súper Ofertas
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigOffers;
