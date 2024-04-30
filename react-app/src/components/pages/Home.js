import React from 'react';
import headshot from '../../raw/Headshot.JPG';
import '../../styles/App.css';
import '../../styles/Navbar.css';
import Navbar from '../Navbar';
import { Button } from 'react-bootstrap';
//import Data_Pill from '../data/Data_Pill';

function Home() {
    return (
      <div className="App">
        <div className="App-header-background">
          <header className="App-header">
            <div className="Headshot-wrapper">
              <img src={headshot} className="App-logo App-header-item" />
            </div>
            <div className="Bio">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            
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

/*
            <Button className="Button App-header-item" onClick={useButton} >This is a cool Button!</Button>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noreferrer"
            >
              Learn React
            </a>
*/