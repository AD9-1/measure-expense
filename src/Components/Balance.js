import React, { useContext } from "react";
import { globalContext } from "../Context/global";

const Balance = () => {
  const context = useContext(globalContext);
  const amount = context.transaction_list.map(
    (transaction) => transaction.amount
  );
  const income = amount
    .filter((item) => item > 0)
    .reduce((sum, item) => (sum += item), 0)
    .toFixed(2);

  const expense = Math.abs(
    amount
      .filter((item) => item < 0)
      .reduce((sum, item) => (sum += item), 0)
      .toFixed(2)
  );

  return (
    <>
      <p className="App__balance">
        {" "}
        Your Balance <span>${income - expense}</span>
      </p>
      <section className="App__showbalance">
        <div>
          <p>INCOME</p>
          <p className="money-plus">${income}</p>
        </div>

        <div>
          <p>EXPENSE</p>
          <p className="money-minus">${expense}</p>
        </div>
      </section>
    </>
  );
};

export default Balance;
