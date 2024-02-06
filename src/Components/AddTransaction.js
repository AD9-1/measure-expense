import React, { useContext, useState } from "react";
import { globalContext } from "../Context/global";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState();
  const context = useContext(globalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const newTran = {
      id: Math.floor(Math.random() * 10000),
      text,
      amount: +amount,
    };

    context.addTransaction(newTran);
  };

  return (
    <div>
      <h3 className="App__transaction">Add new Transaction</h3>
      <form onSubmit={onSubmit}>
        <p className="App__header">Text</p>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="App__input"
        />
        <p className="App__header">Amount</p>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="App__input"
        />
        <div className="App__button">
          {" "}
          <button>Add Transaction</button>
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
