import React, { useState } from 'react';

function ExpTracker() {
  const [expenses, setExpenses] = useState([]);
  const [expenseName, setExpenseName] = useState('');
  const [amount, setAmount] = useState('');

  const expenseNames = [
    'Food',
    'Transportation',
    'Household',
    'Entertainment',
    'Recharge',
    'Utilities',
    'Other'
  ];

  const handleExpenseNameChange = (event) => {
    setExpenseName(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleAddExpense = () => {
    const index = expenses.findIndex(expense => expense.expenseName === expenseName);
    if (index === -1) {
      setExpenses([...expenses, { expenseName, amount }]);
    } else {
      const updatedExpenses = [...expenses];
      updatedExpenses[index].amount = Number(updatedExpenses[index].amount) + Number(amount);
      setExpenses(updatedExpenses);
    }
    setExpenseName('');
    setAmount('');
  };


  const getTotalExpenses = () => {
    let total = 0;
    expenses.forEach((expense) => {
      total += Number(expense.amount);
    });
    return total;
  };

  return (
    <div>
        <br></br>
      <h1>Expense Tracker</h1>
      <div>
        <label name="expenseName">Expense Name:&nbsp;&nbsp;</label>
        <select id="expenseName" value={expenseName} onChange={handleExpenseNameChange}>
          <option value="">Select an expense</option>
          {expenseNames.map((name, index) => (
            <option key={index} value={name}>{name}</option>
          ))}
        </select>
      </div>
      <div>
        <br></br>
        <label name="amount">Amount:&nbsp;&nbsp;</label>
        <input type="number" id="amount" value={amount} onChange={handleAmountChange} />
      </div>
      <button onClick={handleAddExpense}>Add Expense</button>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.expenseName} - {expense.amount} 
           
          </li>
        ))}
      </ul>
      <div>
        <h2>Total Expenses: {getTotalExpenses()}</h2>
      </div>
    </div>
  );
}

export default ExpTracker;