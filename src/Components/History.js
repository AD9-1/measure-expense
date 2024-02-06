import React, { useContext } from "react";
import { globalContext } from "../Context/global";
const History = () => {
  const context = useContext(globalContext);
  console.log("In Transaction List", context);
  /*const context={transaction_list:[{id: 1,text: "Flower",amount: -20,}, { id: 2, text: "Salary", amount: 300 },
  { id: 3, text: "Book", amount: -40 },deleteTransaction]}*/

  return (
    <div className="App__history">
      <p className="App__history--heading">History</p>
      <ul className="history-list">
        {context.transaction_list.map((transaction) => {
          const sign = transaction.amount < 0 ? "-" : "+";
          return (
            <li className="history-list__list minus" key={transaction.id}>
              <button
                className="delete-btn"
                onClick={() => context.deleteTransaction(transaction.id)}
              >
                delete
              </button>
              <p className="minus__des">{transaction.text}</p>
              <p className="minus__amt">
                {sign}${Math.abs(transaction.amount)}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default History;
