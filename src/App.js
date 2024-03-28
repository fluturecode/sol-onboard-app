import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Blockchain from './Blockchain';
import Solana from './Solana';
import Wallet from './Wallet';
import { ThemeProvider } from './ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/blockchain" element={<Blockchain/>} />
          <Route path="/solana" element={<Solana/>} />
          <Route path="/wallet" element={<Wallet/>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;