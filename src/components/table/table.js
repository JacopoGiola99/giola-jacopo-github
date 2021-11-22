import './table.css';
import { useState } from 'react';
import Row from '../Row/Row';

// const handleCloseAllClick = (arrayDettagli, setArrayDettagli) => {
//     // console.log(arrayDettagli);
//     // arrayDettagli.forEach(element =>{
//     //     element = false;
//     // })
//     // console.log(arrayDettagli);
// }

const Table = (props) => {

    const [arrayDettagli, setArrayDettagli] = useState([]);

    const mapp = props.repos.map((student, id) => {

        // setArrayDettagli(arrayDettagli.concat(false));
        // console.log(arrayDettagli);

        return (
            <Row key={id} repos={props.repos[id]} commit={props.commit} arrayDettagli={arrayDettagli[id]} setArrayDettagli={setArrayDettagli[id]} />
        )
    });



    return (
        <div>
            {/* <button onClick={() => handleCloseAllClick(arrayDettagli, setArrayDettagli)}>Chiudi tutti i dettagli</button> */}
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
        </div>
    )
}

export default Table;