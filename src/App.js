import { useState } from "react";
import Dashboard from "./components/Dashboard";
import TransactionList from "./components/TransactionList";
import AddExpenses from "./actions/AddExpenses";
import AddBudget from "./actions/AddBudget";

const initialTransaction = [
  { id: 2345235, title: "Monthly Shopping", amount: -100, type: "-" },
  {
    id: 65472,
    title: "Rent",
    amount: -1000,
    type: "-",
  },
  {
    id: 46124,
    title: "Car Repair",
    amount: -650,
    type: "-",
  },
  {
    id: 43795,
    title: "Internet",
    amount: -60,
    type: "-",
  },
];

function App() {
  const [transaction, setTransaction] = useState(initialTransaction);
  const [showAddExpense, setShowAddExpense] = useState(false);
  const [showAddBudget, setShowAddBudget] = useState(false);
  const totalAmount = initialTransaction.reduce(
    (total, expense) => total + expense.amount,
    0
  );
  const budget = 5000;
  const [totalExpense, setTotalExpense] = useState(totalAmount);
  const [totalBudget, setTotalBudget] = useState(Number(budget) + totalExpense);

  function handleAddBudget(source) {
    setTransaction((newSource) => [...newSource, source]);
    setTotalBudget(totalBudget + source.amount);
  }

  function handleAddExpenses(expense) {
    setTransaction((expenses) => [...expenses, expense]);
    setTotalExpense((totalExpense) => totalExpense + expense.amount);
    setTotalBudget(totalBudget + expense.amount);
  }

  function handleShowAddBudget() {
    setShowAddBudget(!showAddBudget);
    setShowAddExpense(false);
  }

  function handleShowAddExpense() {
    setShowAddExpense(!showAddExpense);
    setShowAddBudget(false);
  }

  return (
    <div className="App">
      <Dashboard
        totalBudget={totalBudget}
        onShowAddExpense={handleShowAddExpense}
        onShowAddBudget={handleShowAddBudget}
      ></Dashboard>
      {showAddExpense && (
        <AddExpenses
          totalExpense={totalExpense}
          onAddExpenses={handleAddExpenses}
        />
      )}
      {showAddBudget && <AddBudget onAddBudget={handleAddBudget} />}
      <TransactionList
        onTotalExpense={setTotalExpense}
        transaction={transaction}
      />
    </div>
  );
}

export default App;
