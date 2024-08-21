import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { addProductToCart } from "../../../redux/ShoppingSlice";

const BestitemsItem = ({
  item,
  addQuantity,
  substractQuantity,
  quantity,
  setShowAlert,
  setNoInCart,
}) => {
  const state = useSelector((state) => state.carrito);
  const dispatch = useDispatch();
  const productsCart = JSON.parse(window.localStorage.getItem("carrito"));
  //console.log(state);
  const addProduct = (e) => {
    const product = JSON.parse(e.target.dataset.item);
    const idProduct = parseInt(e.target.dataset.id);
    // console.log(idProduct);
    let productExists = state.products.find(
      (prod) => prod.idProduct === idProduct
    );
    //console.log(productExists);

    if (productExists == undefined) {
      let newProduct = { ...product, quantity: 1 };
      dispatch(addProductToCart(newProduct));
      productsCart.push(newProduct);
      window.localStorage.setItem("carrito", JSON.stringify(productsCart));
      setNoInCart(true);
      const interval = setTimeout(() => {
        setNoInCart(false);
      }, 3500);
      return () => clearTimeout(interval);
    }
    //Desestructuramos el objeto y agregamos la propiedad cantidad
    else {
      setShowAlert(true);
      const interval = setTimeout(() => {
        setShowAlert(false);
      }, 3500);
      return () => clearTimeout(interval);

      // alert("El producto ya se encuentra en el carrito");
    }
  };

  return (
    <div className="w-60 relative z-20   h-90 border border-gray-400 flex flex-col items-center">
      <div className="w-full ">
        <LazyLoadImage src={`/img/${item.imageName}`} effect="opacity" />
      </div>
      <div className="w-90 h-4/6  ">
        <div className="h-2/6 flex flex-col gap-1">
          <p className="text-sm">{item.name}</p>
          <span className="custom-red-text font-semibold text-lg">
            ${item.price}
          </span>
        </div>
        <div className="h-4/6 flex flex-col  justify-center  gap-3  ">
          <button
            className="bg-black rounded-full w-full py-1 text-white text-sm font-light"
            data-id={item.idProduct}
            data-item={JSON.stringify(item)}
            onClick={addProduct}
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default BestitemsItem;
