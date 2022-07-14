import { configureStore } from "@reduxjs/toolkit";
import animalReducer from "../reducers/animalReducer.js";

export const store = configureStore({
  reducer: {
    animals: animalReducer,
  },
});
