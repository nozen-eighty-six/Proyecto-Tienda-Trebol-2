import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

const OfferSection = () => {
  return (
    <div className="w-full flex justify-center items-center mb-8">
      <div className="w-85 relative">
        <LazyLoadImage src="/img/offer_section_about.webp" effect="opacity" />
        <div className="absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center ">
          <div className="w-2/5 flex flex-col justify-center item  mr-12">
            <h2 className="text-6xl font-bold leading-tight">
              ¡Ahorra siempre!
            </h2>
            <span className="text-xl ">
              Reducir el costo de tu carrito de compras con las ofertas diarias
            </span>
            <button className="w-1/4 py-2 mt-4 custom-red text-white rounded-full">
              Comprar ofertas
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferSection;
