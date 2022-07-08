import Login from './scenes/Login/index'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './scenes/HomePage';
import CreatePerformancePage from './scenes/CreatePerformance';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/CreatePerformancePage" element={<CreatePerformancePage/>} />
        </Routes>
      </Router>
      {/* <HomePage/> */}
    </div>
  );
}

export default App;
