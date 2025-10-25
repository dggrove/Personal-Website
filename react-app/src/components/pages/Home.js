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
              <img src={headshot} className="Headshot App-header-item" alt="Headshot of the developer" />
            </div>
            <div className="Bio App-header-item">
              Hey y'all! 
              My name is Drew Grove, and I'm happy you've found my personal website!
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