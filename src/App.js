// App.js
import React, { useState } from "react";
import "./App.css";
import NewExpense from "./components/NewExpense";
import Expenses from "./components/Expenses";

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  return (
    <div className="app">
      <h1 className="app-title">Expense Tracker</h1>
      <NewExpense onAddExpense={addExpenseHandler} />{" "}
      {/* Pass the function as a prop */}
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
