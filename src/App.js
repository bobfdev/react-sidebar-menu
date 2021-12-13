import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Products from './pages/Products';
import Reports from './pages/Reports';
import Messages from './pages/Messages';
import Support from './pages/Support';
import Team from './pages/Team';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Sidebar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/support" element={<Support />} />
            <Route path="/team" element={<Team />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
