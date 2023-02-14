import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import reducer from "./reducers";
import { rootSaga } from "./sagas";
import { createLogger } from "redux-logger";

const logger = createLogger({});

export const initializeStore = (preloadedState = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    reducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(logger, sagaMiddleware),
  });
  sagaMiddleware.run(rootSaga);
  return store;
};
