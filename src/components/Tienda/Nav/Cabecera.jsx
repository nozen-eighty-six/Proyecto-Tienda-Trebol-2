import { NavLink } from "react-router-dom";
import BuscadorProducto from "./BuscadorProducto";
import UserCabecera from "./UserCabecera";
import UserCategory from "./UserCategory";
import "../../../../public/css/navUser.css";
import CartPreview from "../Cart/CartPreview";
import { useState } from "react";
import { useSelector } from "react-redux";

const Cabecera = () => {
  const [showCart, setShowCart] = useState(false);
  const state = useSelector((state) => state.carrito);
  const stateUser = useSelector((state) => state.user);
  const handleShowCart = () => {
    setShowCart(!showCart);
  };
  return (
    <>
      <div className="box-border nav-user">
        <UserCabecera />

        <div className="custom-red  w-full h-24 flex flex-row justify-between items-center">
          <div
            className="text-4xl font-bold py-6  px-7 
         text-white h-full  "
          >
            <NavLink to={"/"}>
              <span>Trébol.</span>
            </NavLink>
          </div>

          <div className="h-full w-2/5 flex justify-center items-center ">
            {/*Formulario de búsqueda */}
            <BuscadorProducto />
          </div>

          <div className="h-full flex justify-between items-center text-white py-4 px-6 ">
            <div className="px-3">
              <a href="#ubication">
                <svg
                  className="w-5 h-6 fill-current text-white"
                  preserveAspectRatio="none"
                  data-bbox="41.501 20 116.999 160.001"
                  viewBox="41.501 20 116.999 160.001"
                  height="200"
                  width="200"
                  xmlns="http://www.w3.org/2000/svg"
                  data-type="shape"
                  role="img"
                  aria-label="Ubicación"
                >
                  <g>
                    <path d="M157.367 66.82c-3.105-14.146-10.205-25.614-21.1-34.083-14.606-11.356-31.093-15.144-48.998-11.261-10.993 2.385-20.647 7.708-28.696 15.821-8.462 8.531-13.882 18.86-16.109 30.7-1.122 5.953-1.262 11.473-.43 16.874.862 5.609 2.729 10.685 4.442 14.912 4.273 10.539 9.918 20.076 14.358 27.205 8.241 13.235 17.874 26.672 29.45 41.082a248.399 248.399 0 0 0 3.199 3.874l6.694 8.057 5.455-6.944c13.755-16.57 25.171-32.357 34.9-48.262 6.309-10.316 10.816-19.203 14.182-27.969 3.898-10.164 4.793-20.259 2.653-30.006zM119.04 91.152c-5.093 5.141-11.835 7.976-18.984 7.983h-.025c-14.797.001-26.848-12.115-26.872-27.02-.023-14.812 11.962-26.911 26.717-26.972 7.134-.006 13.868 2.764 18.978 7.868 5.141 5.136 7.982 11.955 8 19.2.019 7.109-2.756 13.835-7.814 18.941z"></path>
                  </g>
                </svg>
              </a>
            </div>
            <div className="px-5 ">
              <NavLink>
                <svg
                  className="w-5 h-6 fill-current text-white"
                  preserveAspectRatio="xMidYMid meet"
                  data-bbox="20.999 29 158 142"
                  viewBox="20.999 29 158 142"
                  height="200"
                  width="200"
                  xmlns="http://www.w3.org/2000/svg"
                  data-type="shape"
                  role="img"
                  aria-label="Mi lista de deseos"
                >
                  <g>
                    <path d="M100.653 170.645l63.348-63.545c11.856-12.514 13.322-20.999 13.322-20.999 2.109-7.649 1.63-13.436 1.63-13.436 0-24.116-19.489-43.665-43.53-43.665-14.603 0-27.527 7.214-35.423 18.283l-.462-.636C91.605 35.938 78.898 29 64.576 29c-24.041 0-43.53 19.549-43.53 43.665 0 0-.478 5.787 1.631 13.436 0 0 1.466 8.485 13.321 20.999l63.348 63.545c.001 0 .689.799 1.307 0z"></path>
                  </g>
                </svg>
              </NavLink>
            </div>

            {stateUser.usuario && (
              <div className="h-ful px-5 ">
                <NavLink className={"relative z-40"} onClick={handleShowCart}>
                  <svg
                    className="w-11 h-14 fill-current text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="100%"
                    height="100%"
                    viewBox="0 0 329.7 134.5"
                    data-hook="svg-icon-6"
                  >
                    <path
                      className="ptVJi9"
                      d="M281.6 3c35.7 10.7 56 47.6 45.2 83.3s-47.6 56-83.3 45.2c-35.7-10.7-56-47.6-45.2-83.3C209 13.1 245.9-7.2 281.6 3z"
                    ></path>
                    <text
                      x="265"
                      y="69"
                      fontSize="80"
                      dy=".35em"
                      textAnchor="middle"
                      className="uxskpx text-black "
                      data-hook="items-count"
                    >
                      {state.products.length}
                    </text>
                    <path d="M74.1 134.4c-8.7 0-16.2-7.4-16.2-16.2S65.3 102 74.1 102s16.2 7.4 16.2 16.2-7.4 16.2-16.2 16.2zm0-21.7c-3.1 0-5.6 2.5-5.6 5.6s2.5 5.6 5.6 5.6 5.6-2.5 5.6-5.6-2.5-5.6-5.6-5.6zM120.5 134.5c-8.7 0-16.2-7.4-16.2-16.2s7.4-16.2 16.2-16.2 16.2 7.4 16.2 16.2-7.4 16.2-16.2 16.2zm0-21.7c-3.1 0-5.6 2.5-5.6 5.6s2.5 5.6 5.6 5.6c3.1 0 5.6-2.5 5.6-5.6s-2.5-5.6-5.6-5.6z"></path>
                    <path d="M141.2 92.1L53.5 92.1 23 10.6 0 10.6 0 0 30.4 0 61.2 81.6 133.5 81.6 152.4 30.4 38.5 30.4 34.8 19.9 167.9 19.9z"></path>
                  </svg>
                </NavLink>
              </div>
            )}
          </div>
        </div>

        <UserCategory />
      </div>
      <CartPreview showCart={showCart} setShowCart={setShowCart} />
    </>
  );
};

export default Cabecera;
