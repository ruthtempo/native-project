import { createSlice } from "@reduxjs/toolkit";

const name = "customer";

const initialState = {
  customerFields: {
    firstName: "",
    lastName: "",
    activity: "",
    region: "",
  },
  list: {
    customers: [],
    status: "PENDING",
  },
  create: {
    status: "PENDING",
  },
  edit: {
    status: "PENDING",
  },
  error: {
    message: "",
  },
  fetch: {
    status: "",
  },
};

const reducers = {
  fetchCustomers: (state) => {
    state.fetch.status = "REQUESTING";
  },
  setExistingCustomers: (state, { payload }) => {
    state.list.customers = payload;
    state.fetch.status = "SUCCESS";
  },
  fetchCustomersError: (state) => {
    state.fetch.status = "ERROR";
  },
  setFormField: (state, { payload }) => {
    const current = state.customerFields;
    const { field, value } = payload; // payload is the data carried in the action. here we destructure it
    const fields = {
      ...current,
      [field]: value,
    };
    state.customerFields = fields;
  },
  createCustomerStatus: (state) => {
    state.create.status = "REQUESTING";
  },
  createCustomerResult: (state, { payload }) => {
    state.create.status = "SUCCESS";
    state.list.customers = payload;
    state.customerFields = { ...initialState.customerFields }; // reset form fields
    state.create = { ...initialState.create };
  },
  createCustomerError: (state, { payload }) => {
    state.create.status = "ERROR";
    state.error.message = payload;
    state.customerFields = { ...initialState.customerFields };
  },
  editCustomerResult: (state, { payload }) => {
    state.list.customers = state.list.customers.map((customer) =>
      customer.id === payload.id ? payload : customer
    );
  },
};

const slice = createSlice({
  name,
  initialState,
  reducers,
});

export const {
  setExistingCustomers,
  fetchCustomers,
  fetchCustomersError,
  setFormField,
  createCustomerStatus,
  createCustomerResult,
  editCustomerResult,
  createCustomerError,
} = slice.actions;

export default slice.reducer;
