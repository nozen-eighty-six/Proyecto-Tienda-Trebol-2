import { useState } from "react";
import "react-lazy-load-image-component/src/effects/opacity.css";
import BestitemsItem from "./BestProductsItem";

const BestProducts = ({ data, setShowAlert, setNoInCart, buttonSlider }) => {
  const [quantity, setQuantity] = useState(1);

  const addQuantity = () => {
    setQuantity(quantity + 1);
  };

  const substractQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="w-full h-90 border relative ">
      <div
        className={`flex flex-col flex-wrap  w-full h-full  items-center relative z-20
        px-2 gap-5 overflow-x-hidden   transition-transform duration-300 ease-in-out
         ${
           buttonSlider == false
             ? "transform translate-x-0"
             : "transform -translate-x-1/4"
         }`}
      >
        {data.length > 0 &&
          data.map((product) => {
            return (
              <>
                <BestitemsItem
                  item={product}
                  addQuantity={addQuantity}
                  substractQuantity={substractQuantity}
                  quantity={quantity}
                  setShowAlert={setShowAlert}
                  setNoInCart={setNoInCart}
                />
              </>
            );
          })}
      </div>
    </div>
  );
};

export default BestProducts;
