import './table.css';

const Table = () => {
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
                    </tr>
                    <tr>
                        <td>Giola</td>
                        <td>Jacopo</td>
                        <td>JacopoGiola99</td>
                        <td>Giola-Jacopo-github</td>
                        <td>4</td>
                        <td>29/10/2021</td>
                        <td>29/10/2021</td>
                    </tr>
                    <tr>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table;