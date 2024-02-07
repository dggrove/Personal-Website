import headshot from './raw/Headshot.JPG';
import './styles/App.css';
import './styles/Navbar.css';
import Navbar from './components/Navbar';
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Projects from './components/pages/Projects'

<script> src="App.js"; </script>
function App() {
  return (
    /*<div className="App">
      <Navbar/>
      <div className="App-header-background">
        <header className="App-header">
          <img src={headshot} className="App-logo App-header-item" />
          <Button className="Button App-header-item" onClick={useButton} >This is a cool Button!</Button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <body>
        HELLO WORLD!!!
      </body>
    </div>*/
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />}/>
        <Route path='/projects' exact element={<Projects/>}/>
      </Routes>
    </Router>
  );
}

function useButton() {
  console.log("This is what this button does")
  return
}

export default App;
