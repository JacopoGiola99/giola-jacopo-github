import { useState, useEffect } from 'react';
import Row from '../Row/Row';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const createData = (cognome, nome, utenteGithub, nomeRepo, totaleCommit, dataCreazione, ultimoAggiornamento, id) => {
    return {
        cognome,
        nome,
        utenteGithub,
        nomeRepo,
        totaleCommit,
        dataCreazione,
        ultimoAggiornamento,
        id,
        dettagli: [
            {
                cognome,
                nome,
                utenteGithub,
                nomeRepo,
                totaleCommit,
                dataCreazione,
                ultimoAggiornamento,
            },
        ],
    };
}

const BigTable = (props) => {

    const repos = props.repos;

    const commit = props.commit;

    const CreateRows = (repos, commit) => {

        const [row, setRow] = useState([]);

        useEffect(() => {
            repos.map((repo, id) => {
                let temp = createData(repo.surname, repo.name, repo.login, repo.repoName, commit, repo.creationDate, repo.lastUpdate, id);
                setRow(row => [...row, temp]);
                return console.log('ok');
            })
        }, [commit, repos])

        return row;

    }

    const rows = CreateRows(repos, commit);

    return (
        <TableContainer component={Paper} >
            <Table aria-label="collapsible table" >
                <TableHead >
                    <TableRow sx={{ background: 'rgb(8, 72, 135)' }}>
                        <TableCell style={{ color: 'white' }} align="left">Cognome</TableCell>
                        <TableCell style={{ color: 'white' }} align="left">Nome</TableCell>
                        <TableCell style={{ color: 'white' }} align="left">utente Github</TableCell>
                        <TableCell style={{ color: 'white' }} align="left">nome Repo</TableCell>
                        <TableCell style={{ color: 'white' }} align="left">totale Commit</TableCell>
                        <TableCell style={{ color: 'white' }} align="left">data Creazione</TableCell>
                        <TableCell style={{ color: 'white' }} align="left">ultimo Aggiornamento</TableCell>
                        <TableCell style={{ color: 'white' }} align="left">Mostra dettagli</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, key) => (
                        <Row key={key} row={row} commit={commit} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default BigTable;