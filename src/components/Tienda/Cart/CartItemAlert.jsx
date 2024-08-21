import { useEffect } from "react";

const CartItemAlert = ({
  showAlert,
  notInCart,
  statusFormCustomer,
  setStatusFormCustomer,
  validForm,
  setValidForm,
}) => {
  useEffect(() => {
    let timer;
    //Logré que no se sea necesario que el usuario cierre la alerta para que desaparezca o que la lógica se maneje en un
    //componente que no sea el mismo que la muestra
    if (
      (statusFormCustomer?.error == true ||
        statusFormCustomer?.error == false) &&
      statusFormCustomer?.message
    ) {
      console.log("error");
      timer = setTimeout(() => {
        setStatusFormCustomer(null);
      }, 3500);
    }

    if (validForm == false) {
      timer = setTimeout(() => {
        setValidForm(null);
      }, 3500);
    }

    /*
    if (showAlert) {
      timer = setTimeout(() => {
        setStatusFormCustomer({});
      }, 3500);
    }*/

    return () => {
      clearTimeout(timer);
    };
  }, [showAlert, notInCart, statusFormCustomer, validForm]);
  return (
    <div
      className={`fixed bottom-2 left-3 z-50 rounded-sm  transition duration-3500 ease-out opacity-0  ${
        (showAlert || statusFormCustomer?.error === true) &&
        "custom-red opacity-100"
      } ${notInCart && "bg-green-500 opacity-100"}
       ${
         statusFormCustomer?.error === false &&
         "bg-black/70 text-white font-bold opacity-100"
       }
       ${validForm == false ? " bg-yellow-500/70 opacity-100" : ""}
        `}
    >
      <div className="w-full p-4  text-white text-sm font-bold z-50">
        {notInCart && "Producto agregado al carrito"}
        {showAlert && "El producto ya se encuentra en el carrito"}
        {statusFormCustomer?.message && statusFormCustomer?.message}
        {validForm == false && "Por favor, complete todos los campos"}
      </div>
    </div>
  );
};
//Agrega las alertas según el estado de showAlert y notInCart

export default CartItemAlert;
