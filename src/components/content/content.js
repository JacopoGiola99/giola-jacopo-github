import './content.css';
import Totrepos from '../totrepos/totrepos';
import Nav from '../nav/nav';
import Table from '../table/table';
import Search from '../search/search';

const Content = () => {
    return (
        <div className='content'>
            <Totrepos />
            <Search />
            <Table />
            <Nav />
        </div>
    )
}

export default Content;