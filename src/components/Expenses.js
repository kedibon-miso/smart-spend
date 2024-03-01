// Expenses.js
import React from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  return (
    <div className="expenses">
      {props.items.length === 0 ? (
        <p>No expenses found.</p>
      ) : (
        props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )}
    </div>
  );
}

export default Expenses;
