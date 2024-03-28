import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import BlockchainPage from './components/BlockchainPage';
import SolanaPage from './components/SolanaPage';
import WalletPage from './components/WalletPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/blockchain" component={BlockchainPage} />
        <Route path="/solana" component={SolanaPage} />
        <Route path="/wallet" component={WalletPage} />
      </Switch>
    </Router>
  );
}

export default App;