import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { notificationReducer } from "./notificationReducer";

const createRootReducer = () => {
  return combineReducers({
    notification: notificationReducer,
  });
};

const rootReducer = createRootReducer();

export type RootState = ReturnType<typeof rootReducer>;

export const configuredStore = () => {
  const store = configureStore({
    reducer: rootReducer,
  });

  return store;
};

export const store = configuredStore();
export type Store = ReturnType<typeof configuredStore>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export type AppDispatch = typeof store.dispatch;

export { useTypedSelector as useSelector };
