import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  increaseQuantity,
  decreaseQuantity,
} from "../../../redux/ShoppingSlice";
import "react-lazy-load-image-component/src/effects/opacity.css";

const CartPreviewItem = ({ data }) => {
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
  return (
    <div className="w-full h-1/4  p-4 ">
      <div className="w-2/3 h-full flex justify-start items-start ">
        <NavLink className={"w-1/2 h-full "}>
          <LazyLoadImage
            src={`/img/${data.imageName}`}
            className="w-full h-full"
            width={"100%"}
            height={"100%"}
          />
        </NavLink>

        <div className="w-1/2 h-full flex flex-col justify-start items-start gap-1">
          <div className="w-full h-2/6 flex justify-start items-end px-2">
            <p>Precio: ${data.price}</p>
          </div>
          {/*Me falta arreglar los botones  */}
          <div className="w-full h-3/6 flex justify-center items-center p-2  ">
            <div className="w-full h-3/4 flex justify-between items-end border border-black">
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
        </div>
      </div>
      <hr />
    </div>
  );
};

export default CartPreviewItem;
