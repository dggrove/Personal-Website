import React from 'react';

function Repo({repository}) {
    console.log(repository)
    return(
        <li key={repository.name}>{repository.name}-{repository.language}</li>
    )
}

export default Repo