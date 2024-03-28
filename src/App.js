import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Blockchain from './Blockchain';
import Solana from './Solana';
import Wallet from './Wallet';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/blockchain" component={Blockchain} />
        <Route path="/solana" component={Solana} />
        <Route path="/wallet" component={Wallet} />
      </Switch>
    </Router>
  );
}

export default App;