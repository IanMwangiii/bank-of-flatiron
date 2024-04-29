import React, { useState } from 'react';
import './App.css';
import TransactionTable from './components/TransactionTable';
import TransactionForm from './components/TransactionForm';
import TransactionFilter from './components/TransactionFilter';
const App = () => {
  const [transactions, setTransactions] = useState([]);

  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div className="App">
      <h1>Bank of Flatiron</h1>
      <div className="transaction-form">
        <TransactionForm onSubmit={handleAddTransaction} />
      </div>
      
      <div className="transaction-table">
        <TransactionTable transactions={transactions} />
        <TransactionFilter/>
      </div>
    </div>
  );
};

export default App;
