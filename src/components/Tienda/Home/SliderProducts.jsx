import { useEffect, useState } from "react";

import BestProducts from "./BestProducts";
import { TOKEN } from "../../../Const/token";
import "react-lazy-load-image-component/src/effects/opacity.css";
import helpHttp from "../../../hooks/helpHttp";
import { SERVER_URL } from "../../../Const/server";
import CartItemAlert from "../Cart/CartItemAlert";
import { useSelector } from "react-redux";
const SliderBestProducts = ({ title, buttonName, banner, option }) => {
  const [data, setData] = useState([]);
  const state = useSelector((state) => state.carrito);
  const [showAlert, setShowAlert] = useState(false);
  const [notInCar, setNoInCart] = useState(false);
  const [buttonSlider, setButtonSlider] = useState(false);

  const verificarProductoInCarrito = (e) => {
    let findProduct = state.products.find(
      (product) => product.idProduct === e.target.id
    );

    if (findProduct) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  };
  useEffect(() => {
    const getOffers = () => {
      helpHttp()
        .get(SERVER_URL + "product", {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        })
        .then((res) => {
          if (!res.err) {
            console.log("res", res);
            setData(res);
          }
        })
        .catch((err) => console.log(err));
    };

    getOffers();
  }, []);

  return (
    <>
      <div className="min-vh-80 w-full relative flex flex-col justify-center items-center my-8 ">
        <div className="flex flex-col w-85 h-full gap-3">
          <div className="border border-black w-90">
            <h2 className="text-3xl font-bold">{title}</h2>
          </div>
          {/*Faltaría obtener los producto dinámicamente para que se carguen */}

          {data.length > 0 && (
            <BestProducts
              data={data}
              setShowAlert={setShowAlert}
              setNoInCart={setNoInCart}
              buttonSlider={buttonSlider}
            />
          )}
        </div>
        <button
          className=" custom-red w-40 text-xs px-3 py-2 rounded-full text-white font-semibold mx-auto mt-3
       hover:outline hover:outline-red-600 hover:outline-1  hover:bg-white hover:custom-red-text hover:font-semibold
      "
        >
          {buttonName}
        </button>

        <div className="absolute  top-0 right-0 bottom-0 left-0 w-full   flex justify-between items-center px-20 ">
          <button onClick={() => setButtonSlider(false)}>
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              width="24"
              height="24"
              className="rN6xZT"
            >
              <path
                fillRule="evenodd"
                d="M15.0729595,5 L15.7800663,5.70710678 L9.41020654,12.074 L15.7800663,18.4363861 L15.0729595,19.1434929 L7.99920654,12.077895 L8.00220654,12.074 L8,12.0717464 L15.0729595,5 Z"
              ></path>
            </svg>
          </button>
          <button onClick={() => setButtonSlider(true)}>
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              width="24"
              height="24"
              className="rN6xZT"
            >
              <path
                fillRule="evenodd"
                d="M8.70710678,4.99810828 L15.068,11.3651083 L15.0722115,11.3620693 L15.7793183,12.0691761 L15.776,12.0721083 L15.7782433,12.0758831 L15.0711365,12.7829899 L15.069,12.7801083 L8.70710678,19.1434929 L8,18.4363861 L14.361,12.0721083 L8,5.70521506 L8.70710678,4.99810828 Z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <CartItemAlert
        showAlert={showAlert}
        setShowAlert={setShowAlert}
        notInCart={notInCar}
        setNoInCart={setNoInCart}
      />
      <CartItemAlert showAlert={showAlert} />
    </>
  );
};

export default SliderBestProducts;
