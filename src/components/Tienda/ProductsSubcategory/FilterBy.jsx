import { useEffect, useRef, useState } from "react";
import { SERVER_URL } from "../../../Const/server";
import { TOKEN } from "../../../Const/token";
import { NavLink } from "react-router-dom";

const FilterBy = ({ setData, subname }) => {
  const ref = useRef(null);

  const [minValue, setMinValue] = useState(39.99);
  const [maxValue, setMaxValue] = useState(84.99);

  const [showCategoriaOp, setShowCategoriaOp] = useState(true);
  const [showPriceOp, setShowPriceOp] = useState(false);

  const handleShowCatgOp = () => {
    setShowCategoriaOp(!showCategoriaOp);
  };

  const handleShowPriceOp = () => {
    setShowPriceOp(!showPriceOp);
  };

  const getProductsOffer = async () => {
    try {
      const url = SERVER_URL + "product/offer/" + subname;

      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + TOKEN,
        },
      });
      if (!response.ok) throw new Error("Error en la petición");

      const data = await response.json();
      const products = data.map((product) => {
        return { ...product, offer: true };
      });

      setData(products);
    } catch (error) {
      console.log(error);
    }
  };

  const getPopularProducts = async () => {
    try {
      const url = SERVER_URL + "product/popular/" + subname;

      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + TOKEN,
        },
      });
      if (!response.ok) throw new Error("Error en la petición");

      const data = await response.json();
      const products = data.map((prod) => {
        return { ...prod, popular: true };
      });
      setData(products);
    } catch (error) {
      console.log(error);
    }
  };
  const getProductsBySubName = async () => {
    try {
      const url = SERVER_URL + "product/subcategory/" + subname;

      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + TOKEN,
        },
      });
      if (!response.ok) throw new Error("Error en la petición");

      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleMinChange = (e) => {
    const value = parseFloat(e.target.value);
    if (value > maxValue - 5) setMinValue(maxValue - 5);
    else {
      setMinValue(value);
    }
  };

  const buttonIsActive = (e) => {
    console.log(e.target);
    const buttons = ref.current.querySelectorAll("button");
    buttons.forEach((button) => {
      button.classList.remove("is-active");
    });
    e.target.classList.add("is-active");
  };

  const handleMaxChange = (event) => {
    const value = parseFloat(event.target.value);
    if (value < minValue + 5) {
      setMaxValue(minValue + 5);
    } else {
      setMaxValue(value);
    }
  };

  const calculatePosition = (value) => {
    const min = 39.99;
    const max = 84.99;
    return ((value - min) / (max - min)) * 100;
  };

  return (
    <div className="w-full h-full filter ">
      <div className="w-full h-full flex flex-col gap-3 p-6 ">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-light">Filtrar por</h2>
          <hr />
        </div>
        <div className="flex flex-col gap-2 relative">
          <div className="flex justify-between items-center">
            <span className="text-sm">Categoría</span>
            <button className="relative z-20" onClick={handleShowCatgOp}>
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                width="20"
                height="20"
              >
                <path
                  fillRule="evenodd"
                  d="M15.5,10 L15.5,11 L4.5,11 L4.5,10 L15.5,10 Z"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`flex flex-col items-start text-sm ${
              showCategoriaOp == false
                ? "absolute fade-exit-active "
                : "fade-enter-active"
            }`}
            ref={ref}
          >
            <button
              className="is-active outline-none"
              onClick={(e) => {
                buttonIsActive(e);

                getProductsBySubName();
              }}
            >
              Todos
            </button>
            <button
              className="outline-none"
              onClick={(e) => {
                buttonIsActive(e);

                getProductsOffer();
              }}
            >
              Ofertas
            </button>
            <button
              className="outline-none"
              onClick={(e) => {
                buttonIsActive(e);

                getPopularProducts();
              }}
            >
              Más vendido
            </button>
          </div>
          <hr />
        </div>
        <div className="w-full flex flex-col items-center gap-4 relative">
          <div className="w-full flex justify-between items-center ">
            <span className="text-sm">Precio</span>
            <button
              className="relative z-30 outline-none"
              onClick={handleShowPriceOp}
            >
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                width="20"
                height="20"
              >
                <path
                  fillRule="evenodd"
                  d="M15.5,10 L15.5,11 L4.5,11 L4.5,10 L15.5,10 Z"
                ></path>
              </svg>
            </button>
          </div>

          <div
            className={`w-full   flex-col gap-3  fade-enter ${
              showPriceOp == true
                ? " flex fade-enter-active"
                : "absolute fade-exit-active"
            }`}
          >
            <div className={`slider-container `}>
              <div className="slider-track"></div>
              <div
                className="slider-thumb"
                style={{ left: `${calculatePosition(minValue)}%` }}
              ></div>
              <div
                className="slider-thumb"
                style={{ left: `${calculatePosition(maxValue)}%` }}
              ></div>
              <div className="w-full relative">
                <input
                  type="range"
                  id="range-left"
                  min="39.99"
                  max="84.99"
                  value={minValue}
                  step="0.01"
                  className="absolute cursor-pointer bg-none w-full z-10  opacity-0 focus:outline-none"
                  onChange={handleMinChange}
                />
                <input
                  type="range"
                  id="range-right"
                  min="39.99"
                  max="84.99"
                  value={maxValue}
                  step="0.01"
                  className="absolute cursor-pointer  bg-none w-full z-20 opacity-0 focus:outline-none"
                  onChange={handleMaxChange}
                />
              </div>
            </div>
            <div
              className="w-full flex justify-between items-center 
              text-xs mt-1"
            >
              <span id="priceLeft">${minValue.toFixed(2)}</span>
              <span id="priceRight">$${maxValue.toFixed(2)}</span>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default FilterBy;
