import React from 'react';
import './App.css';
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { AccountSummary } from './components/AccountSummary';
import { TransactionHistory } from './components/TransactionHistory';
import { AddTransaction } from './components/AddTransaction';
import { TransactionProvider } from './TransactionState';
import { Container } from '@material-ui/core';

function App() {
  return (
    <TransactionProvider >
    <Container maxWidth="xs">
      <Header />
      <div className="container">

        <Balance />
        <AccountSummary />
        <TransactionHistory />
        <AddTransaction />
      </div>
      </Container>
    </TransactionProvider>
  );
}

export default App;
