import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "./reducers";

export const useUpdateFields = (customerId) => {
  const dispatch = useDispatch();
  const fields = useSelector((state) => state.customer.customerFields);

  useEffect(() => {
    if (customerId) {
      dispatch(actions.setForm(customerId));
    }
  }, [customerId]);

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
  // used in Create to pass status as props ? need to discover why
  return useSelector((state) => {
    console.log("status", state.customer.create.status);
    return state.customer.create.status;
  });
};

export const useEditCustomer = (customerID) => {
  const dispatch = useDispatch();

  return {
    onSubmit: () => {
      console.log("Dispatching EDIT_CUSTOMER action");
      dispatch(actions.editCustomer(customerID));
    },
  };
};

export const useListCustomers = () => {
  return useSelector((state) => state.customer.list.customers);
};
