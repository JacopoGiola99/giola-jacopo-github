import './content.css';
import Totrepos from '../totrepos/totrepos';
import Nav from '../nav/nav';
import Table from '../table/table';

const Content = () => {
    return (
        <div className='content'>
            <Totrepos />
            <Table />
            <Nav />
        </div>
    )
}

export default Content;