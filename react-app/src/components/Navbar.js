import "../styles/Navbar.css";
import { Fragment } from "react"

function Navbar() {
    return (
        <div className="Navbar-Default"> 
            <a className="Navbar-Icon" href="http://localhost:3000/">DG</a>
            <div className="Navbar-Links">
                <a className="Navbar-Item" href="/Projects">Projects</a>
                <a className="Navbar-Item">Hello</a>
                <a className="Navbar-Item">About</a>
            </div>
        </div>
    )
}

export default Navbar;