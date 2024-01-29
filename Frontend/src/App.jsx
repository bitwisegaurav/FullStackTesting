import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Home';
import HealthCheck from './Components/Health';
import Storage from './Components/Storage';

const App = () => {
  return (
    <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/health">Health Check</Link>
            </li>
            <li>
              <Link to="/storage">Storage</Link>
            </li>
          </ul>
        </nav>

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/health" element={<HealthCheck />} />
          <Route path="/storage" element={<Storage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
