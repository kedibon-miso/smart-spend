// ExpenseItem.js
import React from "react";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-item">
      <div className="expense-item__description">{props.title}</div>
      <div className="expense-item__price">${props.amount}</div>
      <div className="expense-item__date">
        {month} {day}, {year}
      </div>
    </div>
  );
}

export default ExpenseItem;
