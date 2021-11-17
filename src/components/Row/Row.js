import './Row.css';
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

export default Row;