import './content.css';
import Totrepos from '../totrepos/totrepos';
import Table from '../table/table';
import Search from '../search/search';
import Filter from '../filter/filter';

const Content = () => {
    return (
        <div className='content'>
            <Totrepos />
            <Filter />
            <Search />
            <Table />
        </div>
    )
}

export default Content;