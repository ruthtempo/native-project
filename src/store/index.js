import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

export const initializeStore = (preloadedState = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    reducer: {},
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(sagaMiddleware),
  });

  return store;
};
