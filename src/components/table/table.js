import './table.css';
import { useState } from 'react';

const Row = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    //console.log(props.surname);

    return (
        <tbody>
            <tr className="original">
                <td>{props.repos.surname}</td>
                <td>{props.repos.name}</td>
                <td>{props.repos.github_user}</td>
                <td>{props.repos.repo_name}</td>
                <td>3</td>
                <td>{props.repos.creation_date}</td>
                <td>{props.repos.last_update}</td>
                <td><button onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'Nascondi' : 'Mostra'} dettagli</button></td>
            </tr>
            {isOpen &&
                <tr className="copy">
                    <td>{props.repos.surname}</td>
                    <td>{props.repos.name}</td>
                    <td>{props.repos.github_user}</td>
                    <td>{props.repos.repo_name}</td>
                    <td>3</td>
                    <td>{props.repos.creation_date}</td>
                    <td>{props.repos.last_update}</td>
                    <td></td>
                </tr>
            }
        </tbody>
    )
}

const Mapping = (props) => {

    const mapp = props.repos.map((student, id) => {
        console.log(props.repos[id].name);
        return (
            <Row key={id} repos={props.repos[id]}/>
        )
    })

    return mapp;
}

const Table = (props) => {
    //console.log(props.repos[0].surname)
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