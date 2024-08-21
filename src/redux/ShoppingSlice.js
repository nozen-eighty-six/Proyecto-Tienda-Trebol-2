import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: JSON.parse(window.localStorage.getItem("carrito")) || [],
  totalPrice: 0 || JSON.parse(window.localStorage.getItem("totalPrice")),
};
const shoppingSlice = createSlice({
  name: "carrito",
  initialState,
  reducers: {
    // Add to cart all products
    uploadProducts: (state, action) => {
      state.products = action.payload;
    },
    addProductToCart: (state, action) => {
      state.products.push(action.payload);
    },
    removeProductFromCart: (state, action) => {
      state.products = state.products.filter(
        (prod) => prod.idProduct !== action.payload
      );
    },
    increaseQuantity: (state, action) => {
      state.products = state.products.map((prod) =>
        prod.idProduct === action.payload
          ? { ...prod, quantity: prod.quantity + 1 }
          : prod
      );
    },

    decreaseQuantity: (state, action) => {
      state.products = state.products.map((prod) =>
        prod.idProduct === action.payload && prod.quantity > 1
          ? { ...prod, quantity: prod.quantity - 1 }
          : prod
      );
    },

    clear: (state) => {
      state.products = [];
      state.totalPrice = 0;
    },
    updatePriceTotal: (state, action) => {
      state.totalPrice = action.payload;
    },
  },
});

export const {
  uploadProducts,
  addProductToCart,
  removeProductFromCart,
  increaseQuantity,
  decreaseQuantity,
  clear,
  updatePriceTotal,
} = shoppingSlice.actions;

export default shoppingSlice.reducer;
