import './Row.css';
import { useState } from 'react';
import { DateTime } from "luxon";

const Row = (props) => {
    const [isOpen, setIsOpen] = useState(props.arrayDettagli);

    const handleClick = () => {
        setIsOpen(!isOpen);
        //props.setArrayDettagli(!props.ArrayDettagli);
    }

    // Data formato italiano  
    function formatDateCreation (date){
        const result = DateTime.fromISO(date).setLocale('it').toFormat('dd LLLL yyyy');
        return result;
    }   
    function formatDateUpdate (date){
        const result = DateTime.fromISO(date).setLocale('it').toFormat('dd LLLL yyyy HH:mm');
        return result;
    }

    return (
        <tbody>
            <tr className="row">
                <td>{props.repos.surname}</td>
                <td>{props.repos.name}</td>
                <td>{props.repos.login}</td>
                <td>{props.repos.repoName}</td>
                <td>{props.commit}</td>
                <td>{formatDateCreation(props.repos.creationDate)}</td>
                <td>{formatDateUpdate(props.repos.lastUpdate)}</td>
                <td><button onClick={() => handleClick()}>{isOpen ? 'Nascondi' : 'Mostra'} dettagli</button></td>
            </tr>
            {isOpen &&
                <tr className="information">
                    <td>{props.repos.surname}</td>
                    <td>{props.repos.name}</td>
                    <td>{props.repos.login}</td>
                    <td>{props.repos.repoName}</td>
                    <td>{props.commit}</td>
                    <td>{formatDateCreation(props.repos.creationDate)}</td>
                    <td>{formatDateUpdate(props.repos.lastUpdate)}</td>
                    <td></td>
                </tr>
            }
        </tbody>
    )
}

export default Row;