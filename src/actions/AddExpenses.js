import React, { useState } from "react";

const AddExpenses = ({ onAddExpenses }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title || !amount) return;
    const id = crypto.randomUUID;
    const newExpense = { id, title, amount: -Math.abs(amount), type: "-" };

    onAddExpenses(newExpense);
    console.log(newExpense);

    setTitle("");
    setAmount("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Expense Title 💳</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>

        <label>Amount 💸</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        ></input>

        <button onClick={handleSubmit}>Add expense</button>
      </form>
    </div>
  );
};

export default AddExpenses;
