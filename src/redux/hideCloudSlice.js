import { createSlice } from "@reduxjs/toolkit";

const hideCloudSlice = createSlice({
  name: "cloud",
  initialState: {
    oculto: false,
  },
  reducers: {
    handleCloud: (state) => {
      state.oculto = !state.oculto;
    },
  },
});

export const { handleCloud } = hideCloudSlice.actions;
export default hideCloudSlice.reducer;
