import { combineReducers } from "@reduxjs/toolkit";
import customer from "../features/customers/reducers"; //import reducers from each feature

const rootReducer = combineReducers({
  customer,
});

export default rootReducer;
