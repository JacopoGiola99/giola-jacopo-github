import './table.css';
import { useState } from 'react';

const Row = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <tbody>
            <tr className="row">
                <td>{props.repos.surname}</td>
                <td>{props.repos.name}</td>
                <td>{props.repos.login}</td>
                <td>{props.repos.repoName}</td>
                <td>4</td>
                <td>{props.repos.creationDate}</td>
                <td>{props.repos.lastUpdate}</td>
                <td><button onClick={() => handleClick()}>{isOpen ? 'Nascondi' : 'Mostra'} dettagli</button></td>
            </tr>
            {isOpen &&
                <tr className="information">
                    <td>{props.repos.surname}</td>
                    <td>{props.repos.name}</td>
                    <td>{props.repos.login}</td>
                    <td>{props.repos.repoName}</td>
                    <td>4</td>
                    <td>{props.repos.creationDate}</td>
                    <td>{props.repos.lastUpdate}</td>
                    <td></td>
                </tr>
            }
        </tbody>
    )
}

const Mapping = (props) => {

    const mapp = props.repos.map((student, id) => {
        return (
            <Row key={id} repos={props.repos[id]}/>
        )
    })

    return mapp;
}

const Table = (props) => {

    // mapping
    return (
        <div className='tableCont'>
            <table>
                <tbody>
                    <tr>
                        <th>Cognome</th>
                        <th>Nome</th>
                        <th>Utente githb</th>
                        <th>Nome repo</th>
                        <th>Totale commit</th>
                        <th>Data creazione</th>
                        <th>Ultimo aggiornamento</th>
                        <th>Informazioni aggiuntive</th>
                    </tr>
                </tbody>
                <Mapping repos={props.repos}/>
            </table>
        </div>
    )
}

export default Table;