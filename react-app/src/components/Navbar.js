import "../styles/Navbar.css";

function Navbar() {
    return (
        <div className="Navbar-Style"> 
            <a className="Navbar-Icon" href="http://localhost:3000/">DG</a>
            <div className="Navbar-Links">
                <a className="Navbar-Item">Hello</a>
                <a className="Navbar-Item">About</a>
                <a className="Navbar-Item" href="https://github.com/SkylordGrove?tab=repositories" target="_blank">Projects</a>
            </div>
        </div>    
    )
}

export default Navbar;