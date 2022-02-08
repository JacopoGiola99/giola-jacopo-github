import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';
import { useCreateRows } from '../../hooks/useCreateRows';
import Row from '../Row/Row';

const BigTable = ({repos, commit, searchValue}) => {

    const dati = useCreateRows(repos, commit);
    
    const rows = dati.filter(repo => repo.cognome.includes(searchValue));

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
                        <Row key={"Row"+key} row={row} commit={commit} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default BigTable;