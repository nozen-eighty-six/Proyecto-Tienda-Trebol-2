import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartPreviewItem from "./CartPreviewItem";
import { NavLink } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/opacity.css";

const CartPreview = ({ showCart, setShowCart }) => {
  // const [showCartItem, setShowCartItem] = useState(true);
  {
    /*Me falta seguir trabajando en la parte del carrito, la parte de agregar está correctamente - DONE
    *Me falta cargar los productos como items -DONE
   *Me falta indicar la cantidad de productos que están en el carrito en el icono del carrito - TO DO
  *Me falta desarrollar el login y el registro de usuarios - TO DO
    
    */
  }
  const [subTotal, setSubTotal] = useState(0);
  const refCartP = useRef(null);
  const state = useSelector((state) => state.carrito);
  const handleShowCart = () => {
    // setShowCartItem(!showCartItem);
    setShowCart(!showCart);
  };

  useEffect(() => {
    if (showCart == true) {
      document.querySelector("body").style.overflow = "hidden";
      window.localStorage.setItem("carrito", JSON.stringify(state.products));
    } else {
      document.querySelector("body").style.overflow = "auto";
      window.localStorage.setItem("carrito", JSON.stringify(state.products));
    }
  }, [showCart, state.products]);

  useEffect(() => {
    const calculateSubTotal = () => {
      let total = 0;
      state.products.map((prod) => {
        total += prod.price * prod.quantity;
      });
      setSubTotal(total);
      window.localStorage.setItem("totalPrice", JSON.stringify(total));
    };
    calculateSubTotal();
  }, [state.products]);
  return (
    <div
      className={`fixed top-0 right-0 bottom-0 left-0    flex flex-col justify-center items-end bg-black/40  ${
        showCart == true
          ? "z-40 opacity-100 show-cart"
          : "z-40 opacity-0 hide-cart"
      }`}
      ref={refCartP}
    >
      <div
        className={`w-1/4 h-screen flex flex-col justify-start box-border transition duration-700 ease-in-out  ${
          showCart == true ? "show-cart" : "hide-cart"
        }`}
      >
        <div className="custom-red w-full h-20 flex justify-center items-center px-4 text-white text-2xl font-semibold relative">
          <span>Carrito</span>
          <button
            className="absolute top-1/5 left-4 outline-none "
            aria-label="Cerrar Carrito"
            title="Cerrar Carrito"
            onClick={handleShowCart}
          >
            <span className="text-6xl font-extralight">{">"}</span>
          </button>
        </div>
        <div className="w-full h-3/4 flex flex-col bg-white overflow-y-auto pt-2">
          {state.products.length > 0 ? (
            state.products.map((prod) => (
              <CartPreviewItem key={prod.idProduct} data={prod} />
            ))
          ) : (
            <div className="flex justify-center items-center">
              <h2 className="text-xl font-bold">
                No hay productos en el carrito
              </h2>
            </div>
          )}
        </div>
        <div className="w-full bg-white font-light text-xl flex flex-col justify-center gap-2 ps-4 ">
          <span>Subtotal</span>
          <span className="font-semibold">S/{subTotal.toFixed(2)}</span>
        </div>
        <hr />
        <div className="w-full bg-white h-24 flex justify-center items-center border  ">
          <NavLink
            to={"/cart"}
            className="w-4/5 custom-red text-white text-sm text-center font-semibold rounded-full py-2"
            onClick={handleShowCart}
          >
            Ver carrito
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default CartPreview;
