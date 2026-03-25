import './styles/App.css';
import './styles/Navbar.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Projects from './components/pages/Projects'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />}/>
        <Route path='/projects' exact element={<Projects/>}/>
      </Routes>
    </Router>
  );
}

export default App;
