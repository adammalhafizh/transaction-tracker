import React from "react";
import { useState } from "react";

const AddBudget = ({ onAddBudget }) => {
  const [newBudget, setNewBudget] = useState("");
  const [source, setSource] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!source || !newBudget) return;
    const id = crypto.randomUUID;
    const newSource = { id, title: source, amount: newBudget, type: "+" };

    onAddBudget(newSource);
    console.log(newSource);
    setNewBudget("");
    setSource("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>From? 🤔</label>
      <input
        value={source}
        type="text"
        onChange={(e) => setSource(e.target.value)}
      ></input>

      <label>Add Budget 💵</label>
      <input
        value={newBudget}
        type="number"
        onChange={(e) => setNewBudget(Number(e.target.value))}
      ></input>
      <button onClick={handleSubmit}>Add Budget</button>
    </form>
  );
};

export default AddBudget;
