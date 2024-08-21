import { useCallback, useEffect, useRef, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../../../../public/css/navUser.css";
import "react-lazy-load-image-component/src/effects/opacity.css";

const Slider = () => {
  const miRef = useRef(null);
  const [imgIndex, setImgIndex] = useState(0);

  const deleteClassImg = useCallback(() => {
    const imgs = miRef.current.querySelectorAll(".relative .absolute");

    imgs.forEach((img, index) => {
      if (index !== 0) img.classList.remove("z-10");
    });
  }, []);

  //la función updateImg es necesaria envolverla en un useCallback
  // para que no se ejecute en cada renderizado. Ya que
  // cambia el estado de imgIndex y se vuelve a renderizar

  const updateImg = useCallback(() => {
    const imgs = miRef.current.querySelectorAll(".relative .absolute");

    //imgs[imgIndex].classList.add("block");

    imgs.forEach((img, index) => {
      index === imgIndex
        ? img.classList.add("show-index")
        : img.classList.remove("show-index");
    });
    //imgs[imgIndex].classList.toggle("z-10");
    setImgIndex(imgIndex + 1);
    // console.log(imgs[imgIndex]);

    if (imgIndex == imgs.length - 1) {
      //console.log("Se completó");
      setImgIndex(0);
      //deleteClassImg();
    }
  }, [imgIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      updateImg();
      //console.log("hola");
    }, 4500);
    return () => clearInterval(interval);
  }, [updateImg]);
  return (
    <div ref={miRef} className="slider-products box-border w-full min-vh-65-8">
      <div className="relative">
        <div className="min-vh-65-8 absolute m-0 ">
          <LazyLoadImage src="/img/babies.webp" effect="opacity" />

          {/*<img src="/img/babies.webp" alt="" />*/}
        </div>
      </div>
      <div className="relative">
        <div className="min-vh-65-8 absolute ">
          <LazyLoadImage src="/img/granos.webp" effect="opacity" />
          {/*<img src="/img/granos.webp" alt="" />*/}
        </div>
      </div>
      <div className="relative">
        <div className="min-vh-65-8 absolute ">
          <LazyLoadImage src="/img/panaderia.jpg" effect="opacity" />
          {/*<img src="/img/panaderia.jpg" alt="" /> */}
        </div>
      </div>
      <div className="absolute z-20 w-3/5 min-vh-65-8 flex justify-end items-center box-content ">
        <div className="min-vh-65-8 w-3/6 pt-3 flex flex-col justify-center gap-4 me-16">
          <p className="text-2xl self">Fácil, fresco y cómodo</p>
          <p className="text-6xl font-bold break-words leading-tight">
            Compra lo básico del día
          </p>
          <p className="text-4xl font-semibold leading-tight">
            Ahorra en grande en tus marcas favoritas
          </p>
          <button className="custom-red text-white text-lg w-2/6 px-4 py-2 rounded-full">
            Ver más
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
