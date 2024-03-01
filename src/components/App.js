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
      <h1 className="app-title">Spend Smart</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
