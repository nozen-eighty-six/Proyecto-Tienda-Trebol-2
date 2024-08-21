import { useSelector } from "react-redux";
import CartPreviewItem from "./CartPreviewItem";
import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import Footer from "../Home/Footer";
import "react-lazy-load-image-component/src/effects/opacity.css";
import CheckoutButton from "./CheckoutButton";
import ShippingtAddressForm from "./ShippingtAddressForm";
import { useForm } from "../../../hooks/useForm";
import { NavLink } from "react-router-dom";

const iniitialForm = {
  name: "",
  city: "Lima",
  district: "",
  address: "",
};

function validationForm(formulario) {
  let errors = {};
  if (!formulario.name) {
    errors.name = "El nombre es obligatorio";
  } else if (formulario.name.length < 3) {
    errors.name = "El nombre debe tener al menos 3 caracteres";
  }

  if (!formulario.district) {
    errors.district = "El distrito es obligatorio";
  } else if (formulario.district === "default") {
    errors.district = "Debe seleccionar un distrito";
  } else if (formulario.district.length < 3) {
    errors.district = "El distrito debe tener al menos 3 caracteres";
  }

  if (!formulario.address) {
    errors.address = "La dirección es obligatoria";
  } else if (formulario.address.length < 3) {
    errors.address = "La dirección debe tener al menos 3 caracteres";
  }

  return errors;
}

const ShoppingCart = () => {
  const [subTotal, setSubTotal] = useState(0);
  const state = useSelector((state) => state.carrito);
  const [openForm, setOpenForm] = useState(false);
  const [formSipping, setFormShipping] = useState({});
  let { error, handleBlur, setError } = useForm(validationForm, formSipping);
  const [completePurchase, setCompletePurchase] = useState(true);
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
    <>
      <div className="shopping-cart  mt-11 p-4 border-none">
        <div className="w-full h-full">
          <div className="border border-b-black border-t-0 border-r-0 border-l-0  pb-2">
            <h2 className="text-xl font-bold">Mi carrito</h2>
          </div>
          <div className="product-cart">
            {/* Aquí se renderizarán los productos del carrito */}
            {state.products.length > 0 ? (
              state.products.map((prod) => (
                <CartItem key={prod.idProduct} data={prod} />
              ))
            ) : (
              <div className="w-full h-32 flex flex-col justify-center items-center ">
                <h2 className="text-xl font-bold">
                  No hay productos en el carrito
                </h2>
                <NavLink to={"/"} className={"text-sm hover:underline"}>
                  Seguir navegando
                </NavLink>
              </div>
            )}
          </div>
          {/*
           <div className="flex flex-col items-start gap-3 py-4">
            <button className="text-sm custom-red-text bg-transparent">
              Ingresar código promocional
            </button>
            <button
              className="text-sm
           custom-red-text bg-transparent"
            >
              Agregar una nota
            </button>
          </div>
           */}
        </div>
        <div className="cart-summary flex flex-col gap-6">
          <div className="border border-b-black border-t-0 border-r-0 border-l-0 pb-2">
            <h2 className="text-xl font-bold">Rusemen del pedido</h2>
          </div>
          <div className="flex justify-between items-center border border-b-black border-t-0 border-r-0 border-l-0 py-4">
            <h4 className="font-light">Total</h4>
            <span className="font-light">${subTotal.toFixed(2)}</span>
          </div>
          <div>
            <CheckoutButton completePurchase={completePurchase} />
          </div>
          <div>
            <button
              className={`bg-transparent font-light outline-none ${
                state.products.length === 0 ? "" : "hover:underline"
              } custom-red-text `}
              onClick={() => setOpenForm(!openForm)}
              disabled={state.products.length === 0}
              title={
                state.products.length === 0
                  ? "Carrito vacío"
                  : "Haga clic para establecer envío"
              }
              aria-label={
                state.products.length === 0
                  ? "Carrito vacío"
                  : "Haga clic para establecer envío"
              }
            >
              Establecer envio
            </button>
          </div>
        </div>
      </div>
      <ShippingtAddressForm
        openForm={openForm}
        setOpenForm={setOpenForm}
        formSipping={formSipping}
        setFormShipping={setFormShipping}
        error={error}
        setError={setError}
        handleBlur={handleBlur}
        setCompletePurchase={setCompletePurchase}
        completePurchase={completePurchase}
      />

      <Footer />
    </>
  );
};

export default ShoppingCart;
