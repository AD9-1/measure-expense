import React, { useReducer } from "react";
import { createContext } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -340 },
  ],
};
export const globalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  let [state, dispatch] = useReducer(AppReducer, initialState);

  const deleteTransaction = (id) => {
    dispatch({
      type: "Delete_Tran",
      payload: id,
    });
  };
  const addTransaction = (newTransaction) => {
    dispatch({
      type: "Add_Tran",
      payload: newTransaction,
    });
  };
  state = { ...state, deleteTransaction };
  return (
    <globalContext.Provider
      value={{
        transaction_list: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </globalContext.Provider>
  );
};
