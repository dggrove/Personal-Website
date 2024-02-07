import React from 'react';
import headshot from '../../raw/Headshot.JPG';
import '../../styles/App.css';
import '../../styles/Navbar.css';
import Navbar from '../Navbar';
import { Button } from 'react-bootstrap';

function Home() {
    return (
      <div className="App">
        <div className="App-header-background">
          <header className="App-header">
            <img src={headshot} className="App-logo App-header-item" />
            <Button className="Button App-header-item" onClick={useButton} >This is a cool Button!</Button>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
        <body>
          HELLO WORLD!!!
        </body>
      </div>
    );
}
  
function useButton() {
    console.log("This is what this button does")
    return
}

export default Home