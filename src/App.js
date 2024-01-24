import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Arbeider from './components/arbeider/ArbeiderListings';
import './index.css';

function App() {
 return (
    <Router>
      <Routes>
        <Route path="/" element={<Arbeider />} />
      </Routes>
    </Router>
 );
}

export default App;

