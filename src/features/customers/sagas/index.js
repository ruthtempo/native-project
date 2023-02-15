import { all } from "redux-saga/effects";
import {
  watchClearStorage,
  watchCreateCustomer,
  watchGetExistingCustomers,
} from "./create";
import { watchEditCustomer } from "./edit";

export default function* customer() {
  yield all([
    watchCreateCustomer(),
    watchGetExistingCustomers(),
    watchClearStorage(),
    watchEditCustomer(),
  ]);
}
