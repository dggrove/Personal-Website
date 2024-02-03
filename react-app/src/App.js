import logo from './logo.svg';
import './styles/App.css';
import './styles/Navbar.css';
import Navbar from './components/Navbar';
import { Button } from 'react-bootstrap';

<script> src="App.js"; </script>
function App() {
  return (
    <div className="App">
      <div className="Navbar-Default">
        <Navbar/>
      </div>
      <header className="App-header">
        //Add Introduction to me in this header
        //Use Razorback color palette
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button className="Button" onClick={useButton} >This is a cool Button!</Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <body>

      </body>
    </div>
  );
}

function useButton() {
  console.log("This is what this button does")
  return
}

export default App;
