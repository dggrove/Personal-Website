import { Fragment, useEffect, useState } from 'react';
import '../../styles/Projects.css';
import javascriptLogo from '../../raw/JavaScript-logo.png';
import javaLogo from '../../raw/Java-logo.png';
import cssLogo from '../../raw/CSS-logo.png';

function Projects() {
    const [repos, setRepos] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        const getRepos = async () => {
            try {
                const res = await fetch('https://api.github.com/users/dggrove/repos');
                const data = await res.json();
                setRepos(Array.isArray(data) ? data : []);
            } catch (error) {
                console.error('Failed to load repos', error);
            }
        }
        getRepos();
    }, []);

    const logos = [
        ['JavaScript', javascriptLogo],
        ['Java', javaLogo],
        ['CSS', cssLogo]
    ];

    const filtered = repos.filter(repo => {
        const q = query.trim().toLowerCase();
        if (!q) return true;
        return (
            (repo.name && repo.name.toLowerCase().includes(q)) ||
            (repo.language && repo.language.toLowerCase().includes(q))
        );
    });

    return (
        <Fragment>
            <div className="projects-page">
                <header className="projects-header">
                    <h1>Projects</h1>
                    <p>Browse my GitHub projects</p>
                </header>

                <div className="search-wrap">
                    <input
                        className="search-input"
                        type="search"
                        placeholder="Search projects by name or language..."
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        aria-label="Search projects"
                    />
                </div>


                {/* Extract Repos and Repo to separate components */}
                <div className="repo-scroll-container">
                    <ul className="repo-grid">
                        {filtered.map(repo => {
                            const logoTuple = logos.find(tuple => tuple[0] === repo.language);
                            const logo = logoTuple ? logoTuple[1] : null;
                            return (
                                <li key={repo.id} className="repo-card">
                                    <a href={repo.html_url} target="_blank" rel="noreferrer" className="repo-link">
                                        <div className="repo-card-main">
                                            <div className="repo-title">{repo.name}</div>
                                            {repo.description && <div className="repo-desc">{repo.description}</div>}
                                        </div>
                                        <div className="repo-meta">
                                            {logo && <img src={logo} alt={repo.language || 'logo'} className="repo-logo" />}
                                            {repo.language && <span className="repo-lang">{repo.language}</span>}
                                            <span className="repo-stars">⭐ {repo.stargazers_count ?? 0}</span>
                                        </div>
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                    {filtered.length === 0 && <div className="empty-state">No projects match your search.</div>}
                </div>
            </div>
        </Fragment>
    )
}

export default Projects;