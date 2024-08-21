import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shippingAddressForm:
    JSON.parse(localStorage.getItem("shippingAddressForm")) || {},
};

const shippingAddressSlice = createSlice({
  name: "shippingAddress",
  initialState: initialState,
  reducers: {
    saveShippingAddress: (state, action) => {
      state.shippingAddressForm = action.payload;
    },
    removeShippingAddress: (state) => {
      state.shippingAddressForm = {};
    },
  },
});

export const { saveShippingAddress, removeShippingAddress } =
  shippingAddressSlice.actions;

export default shippingAddressSlice.reducer;
