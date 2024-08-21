import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usuario: JSON.parse(window.localStorage.getItem("user")) || null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (sate, action) => {
      sate.usuario = action.payload;
    },
    removeUser: (state) => {
      state.usuario = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
