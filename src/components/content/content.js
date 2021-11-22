import './content.css';
import Totrepos from '../totrepos/totrepos';
import Table from '../table/table';
import Search from '../search/search';
import Filter from '../filter/filter';
import { useState, useEffect } from 'react';
import { listRepos } from '../../Api/Repos';

const Content = () => {
    const [repos, setRepos] = useState(undefined);
    const [commit, setCommit] = useState(0);

    useEffect(() => {
        const populateRepos = async () => {
            setRepos(await listRepos());
        };
        populateRepos();
    }, [])

    const handleLoadClick = (commit) => {
        const populateRepos = async () => {
            setRepos(await listRepos());
            setCommit(commit + 1);
        };
        populateRepos();
    }

    return (
        <div>
            {repos && (
                <div>
                    <div className='content'>
                        <Totrepos Totrepos={repos.length} />
                        <Filter />
                        <Search />
                        <button onClick={() => handleLoadClick(commit)}>Aggiorna Repos</button>
                        <Table repos={repos} commit={commit} />
                    </div>
                </div>)
            }
        </div>
    )
}

export default Content;

//beta.reactjs.org/learn