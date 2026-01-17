import { configureStore, createSlice } from "@reduxjs/toolkit";

const interactionSlice = createSlice({
  name: "interaction",
  initialState: { response: "" },
  reducers: {
    setResponse: (state, action) => {
      state.response = action.payload;
    }
  }
});

export const { setResponse } = interactionSlice.actions;

export const store = configureStore({
  reducer: { interaction: interactionSlice.reducer }
});
