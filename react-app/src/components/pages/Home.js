import headshot from '../../raw/Headshot.JPG';
import '../../styles/App.css';
import '../../styles/Navbar.css';
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

export default Home