import { all } from "redux-saga/effects";
import customer from "../features/customers/sagas"; //all sagas put together in index file

//import sagas from each view/feature

export function* rootSaga() {
  yield all([customer()]);
}
