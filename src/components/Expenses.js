import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("20");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filterArray = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart expenses={filterArray} />
        <ExpenseList filterArray={filterArray}></ExpenseList>
      </Card>
    </div>
  );
};

export default Expenses;
