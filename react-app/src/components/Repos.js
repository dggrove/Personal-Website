import { useState, useEffect } from 'react';
import Repo from './Repo';
import "../styles/Repo.css";

const getRepos = async() => {
    const res = await fetch(
        `https://api.github.com/users/dggrove/repos`
    );
    const data = await res.json();
    return data;
}

function Repos() {
    const [repoInfo, setRepoInfo] = useState([]);

    useEffect(() => {
        getRepos()
        .then(data=>
            setRepoInfo(data)
        );
    }, [])

    return(
        <ul className="repo-list">
            {repoInfo.map((repo) => <Repo key={repo.id} repository={repo}/>)}
        </ul>
    )
}

export default Repos