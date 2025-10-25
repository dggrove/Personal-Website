import React from 'react';

function Repo({repository}) {
    console.log(repository) //Disable on launch
    return(
        <li><a href={repository.html_url} target="_blank" rel="noreferrer">{repository.name}</a>-{repository.language}</li>
    )
}

export default Repo