import React from 'react';
import { Octokit } from 'octokit';

function Repos() {
    let items = ["Big Chungus", "Little Chungus"]

    return(
        <ul>
            {items.map((item) => (<li key={item}>{item}</li>))}
        </ul>
    )
}

function fetchRepos() {
    const octokit = new Octokit({
        auth: ''
    })
}

export default Repos