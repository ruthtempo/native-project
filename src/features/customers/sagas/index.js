import { all } from "redux-saga/effects";
import { watchCreateCustomer } from "./create";

export default function* customer() {
  yield all([watchCreateCustomer()]);
}
