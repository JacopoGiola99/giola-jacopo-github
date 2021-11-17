import './content.css';
import Totrepos from '../totrepos/totrepos';
import Table from '../table/table';
import Search from '../search/search';
import Filter from '../filter/filter';
import { useState, useEffect } from 'react';
import { listRepos } from '../../Api/Repos';

const Content = () => {
    const [repos, setRepos] = useState(undefined);

    useEffect(() => {
        const populateRepos = async () => {
            setRepos(await listRepos());
        };
        populateRepos();
        console.log("On amount del componente")
    }, [])

    return (
        <div>
            {repos && (
                <div>
                    <div className='content'>
                        <Totrepos Totrepos={repos.length} />
                        <Filter />
                        <Search />
                        <Table repos={repos} />
                    </div>
                </div>)
            }
        </div>
    )
}

export default Content;

//beta.reactjs.org/learn