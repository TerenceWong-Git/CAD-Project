import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer from "../pages/auth/authSlice";

export const store = configureStore({
  reducer: { auth: authReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type IRootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
