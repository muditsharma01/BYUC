import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage';
import Signup from './Components/Signup';
import Login from './Components/Login';
import CarDetailsPage from './Components/CarDetails';
import Aboutus from './Components/Aboutus';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/cardetails" element={<CarDetailsPage />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/signup" element={<Signup />} />
        
      </Routes>
    </div>
  </Router>

  );
}

export default App;
