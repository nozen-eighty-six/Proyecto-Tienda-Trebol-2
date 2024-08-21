import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

const FeaturedPromotions = () => {
  return (
    <div className="w-full min-vh-60 flex justify-center  mt-10 ">
      <div className=" w-85 h-full flex justify-center items-center gap-10  ">
        <div className="w-4/5 h-full relative">
          <LazyLoadImage
            src="/img/wines.webp"
            effect="opacity"
            className="w-full h-full"
            width={"100%"}
            height={"100%"}
          />

          <div className="absolute top-0 right-0 bottom-0 left-0 flex  justify-center items-center border border-black ">
            <div className="w-3/5 h-5/6 flex flex-col justify-center gap-4 relative">
              <p className="text-lg">¡Es la hora del vino!</p>
              <p className="text-3xl font-bold">Gran oferta en </p>
              <p className="text-7xl font-semibold">Vino selectos</p>
              <button className="custom-red text-white text-sm font-bold rounded-full w-36 px-2 py-2">
                Comprar ahora
              </button>
              <div
                className="absolute w-28 h-28 rounded-full top-1 right-4 custom-red text-white
                flex justify-center items-center text-center transform rotate-12
              "
              >
                <span className="text-xl font-bold">Oferta limitada</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/5 h-full relative">
          <LazyLoadImage
            src="/img/higiene.webp"
            effect="opacity"
            className="w-full h-full"
            width={"100%"}
            height={"100%"}
          />
          <div className="absolute top-0 right-0 bottom-0 left-0 flex flex-col justify-center items-center">
            <div className="flex flex-col gap-3">
              <p className="text-lg font-normal">Oferta de la semana</p>
              <span className="text-8xl font-semibold">-40%</span>
              <p className="text-2xl font-bold">Productos de limpieza</p>
              <button className="custom-red text-white text-sm font-bold rounded-full w-36 px-2 py-2">
                Comprar ahora
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPromotions;
