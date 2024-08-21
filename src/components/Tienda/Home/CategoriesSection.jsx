import { LazyLoadImage } from "react-lazy-load-image-component";
import { NavLink } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/opacity.css";


/*
    <div className="self-start">
          <h2 className="text-3xl font-semibold ">Categorías más populares</h2>
        </div>
*/
const CategoriesSection = () => {
  return (
    <section className="w-full h-screen  flex flex-col justify-center items-center gap-4  my-4 border border-black">
      <div className="w-85 ">
        <h2 className="text-3xl font-semibold ">Categorías más populares</h2>
      </div>
      <div className="w-85 h-90 flex flex-col justify-center items-center gap-4 border border-red-800">
        <div className="border w-full h-full  flex   justify-center items-center flex-wrap  flex-categories-section  ">
          <div className="w-full h-full border border-gray-400 relative">
            <div className="w-full h-5/6 flex justify-center items-end relative ">
              <NavLink className={"w-44 h-36  relative z-20 "}>
                <LazyLoadImage src="/img/vegetables_category.webp" />
              </NavLink>
              <div className="absolute w-44 h-44 bg-amber-100 z-10 bottom-4 rounded-full"></div>
            </div>
            <div className="w-full h-1/6 flex justify-center items-center">
              <span className="font-bold">Vegetales</span>
            </div>
          </div>
          <div className="w-full h-full border border-gray-400">
            <div className="w-full h-5/6 flex justify-center items-end relative">
              <NavLink className={"w-52 h-36 z-20"}>
                <LazyLoadImage src="/img/bakery.webp" />
              </NavLink>
              <div className="absolute w-44 h-44 bg-amber-100 z-10 bottom-4 rounded-full"></div>
            </div>
            <div className="w-full h-1/6 flex justify-center items-center">
              <span className="font-bold">Panadería</span>
            </div>
          </div>
          <div className="w-full h-full border border-gray-400">
            <div className="w-full h-5/6 flex justify-center items-end relative">
              <NavLink className={"w-40 h-48 z-20"}>
                <LazyLoadImage
                  src="/img/wines_category.webp"
                  className="w-full h-full"
                />
              </NavLink>
              <div className="absolute w-44 h-44 bg-amber-100 z-10 bottom-4 rounded-full"></div>
            </div>
            <div className="w-full h-1/5 flex justify-center items-center">
              <span className="font-bold">Vinos</span>
            </div>
          </div>
          <div className="w-full h-full border border-gray-400">
            <div className="w-full h-5/6 flex justify-center items-end relative">
              <NavLink className={"w-40 h-36 relative z-20"}>
                <LazyLoadImage src="/img/dairy_eggs.webp" />
              </NavLink>
              <div className="absolute w-44 h-44 bg-amber-100 z-10 bottom-4 rounded-full"></div>
            </div>
            <div className="w-full h-1/6 flex justify-center items-center">
              <span className="font-bold">Láctenos y huevo</span>
            </div>
          </div>
          <div className="w-full h-full border border-gray-400">
            <div className="w-full h-5/6 flex justify-center items-end relative">
              <NavLink className={"w-44 h-36 relative z-20"}>
                <LazyLoadImage src="/img/meat_birds.webp" />
              </NavLink>
              <div className="absolute w-44 h-44 bg-amber-100 z-10 bottom-5 rounded-full"></div>
            </div>
            <div className="w-full h-1/6 flex  justify-center items-center">
              <span className="font-bold">Carne y aves</span>
            </div>
          </div>
          <div className="w-full h-full border border-gray-400">
            <div className="w-full h-5/6 flex justify-center items-end relative">
              <NavLink className={"w-36 h-52 relative z-20"}>
                <LazyLoadImage
                  src="/img/drinks_wo_al.webp"
                  className="w-full h-full"
                />
              </NavLink>
              <div className="absolute w-44 h-44 bg-amber-100 z-10 bottom-5 rounded-full"></div>
            </div>
            <div className="w-full h-1/6 flex justify-center items-center">
              <span className="font-bold">Bebidas sin alcohol</span>
            </div>
          </div>
          <div className="w-full h-full border border-gray-400">
            <div className="w-full h-5/6 flex justify-center items-end relative">
              <NavLink className={"w-40 h-40 relative z-20"}>
                <LazyLoadImage src="/img/cleaning_products.webp" />
              </NavLink>
              <div className="absolute w-44 h-44 bg-amber-100 z-10 bottom-5 rounded-full"></div>
            </div>
            <div className="w-full h-1/6 flex justify-center items-center">
              <span className="font-bold ">Productos de limpieza</span>
            </div>
          </div>
          <div className="w-full h-full border border-gray-400">
            <div className="w-full h-5/6 flex justify-center items-end relative">
              <NavLink className={"w-40 h-48 relative z-20"}>
                <LazyLoadImage
                  src="/img/cereals_snacks.webp"
                  className="w-full h-full"
                />
              </NavLink>
              <div className="absolute w-44 h-44 bg-amber-100 z-10 bottom-5 rounded-full"></div>
            </div>
            <div className="w-full h-1/6 flex justify-center items-center">
              <span className="font-bold">Cereales y botanas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
