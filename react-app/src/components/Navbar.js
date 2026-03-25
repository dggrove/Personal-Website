import "../styles/Navbar.css";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="Navbar-Default"> 
            <Link className="Navbar-Icon" to="/">DG</Link>
            <div className="Navbar-Links">
                <Link className="Navbar-Item" to="/projects">Projects</Link>
                <Link className="Navbar-Item" to="#">Hello</Link>
                <Link className="Navbar-Item" to="#">About</Link>
            </div>
        </div>
    )
}

export default Navbar;