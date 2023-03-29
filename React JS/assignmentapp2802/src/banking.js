import React, { useState } from 'react';

const transactions = [
  { id: 1, type: 'deposit', amount: 1000 },
  { id: 2, type: 'withdrawal', amount: -500 },
  { id: 3, type: 'deposit', amount: 2000 },
  { id: 4, type: 'withdrawal', amount: -750 },
];

function BankingApp() {
  const [balance, setBalance] = useState(0);
  const [history, setHistory] = useState(transactions);

  function calculateBalance() {
    const balance = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
    setBalance(balance);
  }

  React.useEffect(() => {
    calculateBalance();
  }, []);

  function addTransaction(type, amount) {
    const id = history.length + 1;
    const transaction = { id, type, amount };
    setHistory([...history, transaction]);
    console.log(type)
    
    type === 'withdrawal' ? setBalance(balance - amount) : setBalance(balance + amount)

    
  }

  return (
    <div>
      <h1>Banking App</h1>
      <p>Current balance: {balance}</p>
      <h2>Transaction History</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {history.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.type}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Add Transaction</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        const type = e.target.elements.type.value;
        const amount = parseInt(e.target.elements.amount.value);
        addTransaction(type, amount);
        e.target.reset();
      }}>
        <label>
          Type:
          <select name="type">
            <option value="deposit">Deposit</option>
            <option value="withdrawal">Withdrawal</option>
          </select>
        </label>
        <br />
        <label>
          Amount:
          <input type="number" name="amount" required />
        </label>
        <br />
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
}

export default BankingApp;