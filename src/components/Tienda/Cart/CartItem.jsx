import React from "react";
import {
  decreaseQuantity,
  increaseQuantity,
  removeProductFromCart,
} from "../../../redux/ShoppingSlice";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

const CartItem = ({ data }) => {
  const state = useSelector((state) => state.carrito);
  const dispatch = useDispatch();
  const increaseQuantityProduct = (e) => {
    const buttton_increase = document.querySelector(
      ".button-increase" + e.target.id
    );
    console.log(buttton_increase);
    let id = parseInt(buttton_increase.id);
    console.log(id);
    dispatch(increaseQuantity(id));
  };

  const decreaseQuantityProduct = (e) => {
    const buttton_decrease = document.querySelector(
      ".button-decrease" + e.target.id
    );
    let id = parseInt(e.target.id);
    console.log(data.quantity);
    if (data.quantity > 1) {
      dispatch(decreaseQuantity(id));
    }
    if (data.quantity == 1) {
      buttton_decrease.disabled = true;
    }
  };

  const removeProduct = (e) => {
    dispatch(removeProductFromCart(parseInt(e.target.id)));
  };
  return (
    <div className="w-full h-1/4  p-4 border border-b-black border-x-0">
      <div className="w-full h-full flex justify-start items-start gap-2">
        <NavLink className={"w-1/5 h-full border border-black/40"}>
          <LazyLoadImage
            src={`/img/${data.imageName}`}
            className="w-full h-full"
            width={"100%"}
            height={"100%"}
            effect="opacity"
          />
        </NavLink>

        <div className="w-4/5 h-full flex justify-between items-center gap-1 ">
          <div className="w-1/4 h-2/6 flex justify-center items-center px-2 ">
            <p className="font-light">Precio: ${data.price}</p>
          </div>
          {/*Me falta arreglar los botones  */}
          <div className="w-full h-3/6 flex justify-center items-center p-2  ">
            <div className="w-1/2 h-3/4 flex justify-between items-center border border-black">
              <div className="w-1/2 h-5 flex justify-center items-center  text-center">
                <button
                  id={data.idProduct}
                  className={"button-increase" + data.idProduct}
                  onClick={(e) => increaseQuantityProduct(e)}
                >
                  <svg
                    id={data.idProduct}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="16"
                    height="16"
                    className="sKgkiCm"
                  >
                    <path
                      fillRule="evenodd"
                      d="M13,5 L13,12 L20,12 L20,13 L13,13 L13,20 L12,20 L11.999,13 L5,13 L5,12 L12,12 L12,5 L13,5 Z"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="w-1/2 h-5 flex justify-center items-center text-center">
                {data.quantity}
              </div>
              <div className="w-1/2 h-5 flex justify-center items-center   text-center button-decrease">
                <button
                  id={data.idProduct}
                  className={`font-bold decrease${data.idProduct}`}
                  onClick={decreaseQuantityProduct}
                >
                  <svg
                    id={data.idProduct}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="16"
                    height="16"
                    className="sKgkiCm"
                  >
                    <path
                      fillRule="evenodd"
                      d="M20,12 L20,13 L5,13 L5,12 L20,12 Z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div>
            <button id={data.idProduct} onClick={removeProduct}>
              <svg
                id={data.idProduct}
                onClick={removeProduct}
                viewBox="0 0 20 20"
                fill="currentColor"
                width="20"
                height="20"
              >
                <path
                  fillRule="evenodd"
                  d="M11.5,3 C12.327,3 13,3.673 13,4.5 L13,4.5 L13,5 L16,5 L16,6 L15,6 L15,14.5 C15,15.878 13.878,17 12.5,17 L12.5,17 L7.5,17 C6.122,17 5,15.878 5,14.5 L5,14.5 L5,6 L4,6 L4,5 L7,5 L7,4.5 C7,3.673 7.673,3 8.5,3 L8.5,3 Z M14,6 L6,6 L6,14.5 C6,15.327 6.673,16 7.5,16 L7.5,16 L12.5,16 C13.327,16 14,15.327 14,14.5 L14,14.5 L14,6 Z M9,8 L9,14 L8,14 L8,8 L9,8 Z M12,8.001 L12,14 L11,14 L11,8.001 L12,8.001 Z M11.5,4 L8.5,4 C8.224,4 8,4.224 8,4.5 L8,4.5 L8,5 L12,5 L12,4.5 C12,4.224 11.776,4 11.5,4 L11.5,4 Z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
