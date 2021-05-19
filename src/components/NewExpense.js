import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  const [show, setshow] = useState(false);

  const startEdit = () => {
    setshow(true);
  };
   const stopEdit = () => {
     setshow(false);
   };
  return (
    <div className="new-expense">
      {!show && (
        <button type="button" onClick={startEdit}>
          Add expenses
        </button>
      )}
      {show && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} stopEdit={stopEdit} />}
    </div>
  );
};

export default NewExpense;
