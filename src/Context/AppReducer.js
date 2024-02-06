import React from "react";
// action =dispatch in global.js
const AppReducer = (state, action) => {
  switch (action.type) {
    case "Delete_Tran": {
      return {
        ...state,
        transactions: state.transactions.filter(
          (tran) => tran.id !== action.payload
        ),
      };
    }
    case "Add_Tran": {
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    }
    default:
      return state;
  }
};

export default AppReducer;
