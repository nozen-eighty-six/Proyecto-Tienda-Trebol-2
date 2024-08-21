import { LazyLoadImage } from "react-lazy-load-image-component";
import { NavLink } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/opacity.css";

const ProductList = ({ data }) => {
  return (
    <div className="products-sub w-full h-full flex justify-start items-center gap-4 px-4 border border-black">
      {data.length > 0 &&
        data.map((value) => {
          return (
            <>
              <div className="h-full border border-gray-400 flex flex-col items-center relative">
                <div className="w-full h-3/6 ">
                  <NavLink>
                    <LazyLoadImage
                      src={`/img/${value.imageName}`}
                      effect="opacity"
                      className="w-full h-full"
                      width={"100%"}
                      height={"100%"}
                    />
                  </NavLink>
                </div>
                <div className="w-90 h-4/6">
                  <div className="h-2/6 flex flex-col gap-1">
                    <p className="text-sm">{value.description}</p>
                    <div
                      className={`flex ${
                        value.originalPrice != value.price
                          ? "gap-4"
                          : "justify-start"
                      } `}
                    >
                      <span className="custom-red-text font-semibold text-lg">
                        ${value.price}
                      </span>
                      {value.originalPrice != value.price && (
                        <span className="custom-red-text font-semibold text-lg line-through">
                          ${value.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="h-4/6 flex flex-col  justify-center  gap-3 ">
                    <div className="w-full  flex justify-between items-center  px-2   border border-black">
                      <div className="text-lg">
                        <button>+</button>
                      </div>
                      <div>1</div>
                      <div className="text-lg">
                        <button>-</button>
                      </div>
                    </div>
                    <button className="bg-black rounded-full w-full py-1 text-white text-sm font-light">
                      Comprar
                    </button>
                  </div>
                </div>
                {value.originalPrice != value.price && (
                  <div className="absolute z-50 top-0 left-0 px-4 custom-red text-white text-sm p-1 ">
                    Mejor oferta
                  </div>
                )}
                {value.popular && (
                  <div className="absolute z-50 top-0 left-0 px-4 custom-red text-white text-sm p-1 ">
                    Más vendido
                  </div>
                )}
              </div>
            </>
          );
        })}
    </div>
  );
};

export default ProductList;
