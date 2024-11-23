import React from "react";
import { useState } from "react";

const Dashboard = ({
  onShowBudget,
  onShowAddBudget,
  totalBudget,
  onShowAddExpense,
}) => {
  const [showBudget, setShowBudget] = useState(false);

  function handleShowBudget() {
    setShowBudget(!showBudget);
  }

  return (
    <div className="dashboard">
      <div className="budget-total">
        Your budget
        <div className="budget-total-show">
          <h2>${showBudget ? totalBudget : "***"}</h2>
          <button onClick={handleShowBudget}>{showBudget ? "❌" : "👁️"}</button>
        </div>
      </div>

      <div className="actions-list">
        <ul>
          <li className="action">
            <button onClick={onShowAddBudget}>
              💵 <p>Add Budget</p>
            </button>
          </li>
          <li className="action">
            <button onClick={onShowAddExpense}>
              💸 <p>Add Expenses</p>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
