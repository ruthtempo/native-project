import AsyncStorage from "@react-native-async-storage/async-storage";
import { call, put, select, takeEvery, takeLatest } from "redux-saga/effects";
import * as actions from "../reducers";

export function* watchCreateCustomer() {
  yield takeLatest(actions.createCustomerStatus.toString(), takeCreateCustomer); // this root saga listens to action  and runs the other saga function
}

export function* takeCreateCustomer() {
  console.log("Starting fetch request to API - CREATE CUSTOMERS");

  try {
    const fields = yield select((state) => state.customer.customerFields);
    // console.log("fields", yield select((state) => state));

    const customers = yield select((state) => state.customer.list.customers);
    // console.log("customers", customers);

    const customer = {
      id: customers.length + 1,
      ...fields,
    };
    const result = [customer, ...customers];
    // console.log(result);
    yield call(
      [AsyncStorage, AsyncStorage.setItem],
      "customers",
      JSON.stringify(result)
    ); //localstorage save
    yield put(actions.createCustomerResult(result)); // local save
  } catch (error) {
    yield put(actions.createCustomerError(error.toString()));
  }
}

export function* watchGetExistingCustomers() {
  console.log("listening to fetch request");
  yield takeLatest(actions.fetchCustomers.toString(), takeGetExistingCustomers);
}

export function* takeGetExistingCustomers() {
  console.log("Starting fetch request to get CUSTOMERS");
  try {
    const customersData = yield call(
      [AsyncStorage, AsyncStorage.getItem],
      "customers"
    );
    const parsedCustomers = JSON.parse(customersData);
    console.log("parsedCustomers", parsedCustomers);
    yield put(actions.setExistingCustomers(parsedCustomers));
  } catch (error) {
    yield put(actions.fetchCustomersError(error.toString()));
  }
}
