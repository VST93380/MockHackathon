import logo from './logo.svg';
import './App.css';
import Admin from './components/Admin';
import User from './components/User';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Doctor from './components/Doctor';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/admin" element={<Admin/>} />
          <Route path="/user" element={<User/>} />
          <Route path="/doctor" element={<Doctor/>} />
        </Routes>
    </Router> 
    </div>
  );
}

export default App;
