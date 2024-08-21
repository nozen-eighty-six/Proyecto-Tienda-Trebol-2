import { configureStore } from "@reduxjs/toolkit";
import carritoReducer from "./ShoppingSlice";
import userReducer from "./userSlice";
import shippingAddressReducer from "./ShippingAddressSlice";
//Tener un pedazo del estado
//global de la aplicación
const store = configureStore({
  reducer: {
    carrito: carritoReducer,
    user: userReducer,
    shippingAddress: shippingAddressReducer,
  },
});

export default store;
