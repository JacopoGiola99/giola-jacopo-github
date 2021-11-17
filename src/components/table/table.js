import './table.css';
import { useState, useEffect } from 'react';
import { listRepos } from '../../Api/Repos';
import Row from '../Row/Row';

const Table = (props) => {

    const mapp = props.repos.map((student, id) => {
        return (
            <Row key={id} repos={props.repos[id]}/>
        )
    });

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
                {mapp}
            </table>
        </div>
    )
}

export default Table;