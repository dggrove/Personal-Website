import "../styles/Repo.css";
import "../styles/App.css";
import javascriptLogo from "../raw/JavaScript-logo.png"
import javaLogo from "../raw/Java-logo.png"
import cssLogo from "../raw/CSS-logo.png"

function Repo({repository}) {
    console.log(repository); //Disable on launch
    const logos = [
        ["JavaScript", javascriptLogo], 
        ["Java", javaLogo], 
        ["CSS", cssLogo]
    ];
    console.log("Logos" + logos);
    const logoTuple = logos.find(tuple => tuple[0] == repository.language);
    console.log("Tuple" + logoTuple);
    const logo = logoTuple[1];

    return(
        <li>
            <a className="repo-item" href={repository.html_url} target="_blank" rel="noreferrer">
                <a href={repository.html_url} target="_blank" rel="noreferrer">
                    {repository.name}
                </a>
                <img src={logo} className="repo-content"/>
            </a>
        </li>
    )
}

export default Repo