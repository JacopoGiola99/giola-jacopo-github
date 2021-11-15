import './content.css';
import Totrepos from '../totrepos/totrepos';
import Table from '../table/table';
import Search from '../search/search';
import Filter from '../filter/filter';
import { useState } from 'react';
import { listRepos } from '../../Api/Repos';

const Content = () => {
    const [repos, useRepos] = useState(listRepos())
    return (
        <div className='content'>
            <Totrepos Totrepos={repos.length} />
            <Filter />
            <Search />
            <Table repos={repos}/>
        </div>
    )
}

export default Content;

//beta.reactjs.org/learn