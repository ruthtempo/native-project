import { all } from "redux-saga/effects";
import {
  watchClearStorage,
  watchCreateCustomer,
  watchGetExistingCustomers,
} from "./create";

export default function* customer() {
  yield all([
    watchCreateCustomer(),
    watchGetExistingCustomers(),
    watchClearStorage(),
  ]);
}
