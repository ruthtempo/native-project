import { useDispatch, useSelector } from "react-redux";
import * as actions from "./reducers";

export const useUpdateFields = () => {
  const dispatch = useDispatch();
  const fields = useSelector((state) => state.customer.customerFields);

  return {
    fields,
    setFormField: (field) => (value) => {
      console.log(`updating field ${field} to ${value}`);
      return dispatch(actions.setFormField({ field, value }));
    },
  };
};

export const useNewCustomer = () => {
  const dispatch = useDispatch();

  return {
    onSubmit: () => {
      console.log("Dispatching CREATE_CUSTOMER action");
      dispatch(actions.createCustomerStatus());
    },
  };
};

export const useNewCustomerStatus = () => {
  return useSelector((state) => {
    console.log("status", state.customer.create.status);
    return state.customer.create.status;
  });
};

export const useEditCustomer = () => {
  const dispatch = useDispatch();
  return {
    onSubmit: () => {
      console.log("Dispatching EDIT_CUSTOMER action");
      dispatch(actions.editCustomerResult());
    },
  };
};

export const useListCustomers = () => {
  return useSelector((state) => state.customer.list.customers);
};

export const useFetchCustomers = () => {
  return useSelector((state) => state.customer.fetch);
};
