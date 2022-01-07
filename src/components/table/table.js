//import './table.css';
import { useState, useEffect } from 'react';
//import Row from '../Row/Row';
import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

// const handleCloseAllClick = (arrayDettagli, setArrayDettagli) => {
//     console.log(arrayDettagli);
//     arrayDettagli.forEach(element =>{
//         element = false;
//     })
//     console.log(arrayDettagli);
// }

// const CreateArray = (props) => {
//     const [arrayDettagli, setArrayDettagli] = useState([]);

//     const repos2 = props.repos;
//     useEffect((arrayDettagli, repos2) => {
//         repos2.forEach(element => {
//             setArrayDettagli(arrayDettagli.concat(false));
//             console.log(arrayDettagli);
//             return arrayDettagli;
//         })
//     }, [])
// }

const createData = (cognome, nome, utenteGithub, nomeRepo, totaleCommit, dataCreazione, ultimoAggiornamento) => {
    return {
        cognome,
        nome,
        utenteGithub,
        nomeRepo,
        totaleCommit,
        dataCreazione,
        ultimoAggiornamento,
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

const Row = (props) => {
    const { row } = props;
    const totCommit = props.commit;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset', background: 'green' } }}>
                <TableCell align="left">{row.cognome}</TableCell>
                <TableCell align="left">{row.nome}</TableCell>
                <TableCell align="left">{row.utenteGithub}</TableCell>
                <TableCell align="left">{row.nomeRepo}</TableCell>
                <TableCell align="left">{totCommit}</TableCell>
                <TableCell align="left">{row.dataCreazione}</TableCell>
                <TableCell align="left">{row.ultimoAggiornamento}</TableCell>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
                    <Collapse in={open} timeout="auto" unmountOnExit sx={{ background: 'orange' }} >
                        <Box sx={{ margin: 1 }}>
                            <Table size="small" aria-label="dettagli" sx={{ background: 'red' }}>
                                <TableBody>
                                    {row.dettagli.map((dettagliRow) => (
                                        <TableRow key={dettagliRow.date}>
                                            <TableCell align="left">{dettagliRow.cognome}</TableCell>
                                            <TableCell align="left">{dettagliRow.nome}</TableCell>
                                            <TableCell align="left">{dettagliRow.utenteGithub}</TableCell>
                                            <TableCell align="left">{dettagliRow.nomeRepo}</TableCell>
                                            <TableCell align="left">{totCommit}</TableCell>
                                            <TableCell align="left">{dettagliRow.dataCreazione}</TableCell>
                                            <TableCell align="left">{dettagliRow.ultimoAggiornamento}</TableCell>
                                            <TableCell align="left"></TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

Row.propTypes = {
    row: PropTypes.shape({
        cognome: PropTypes.string.isRequired,
        nome: PropTypes.string.isRequired,
        utenteGithub: PropTypes.string.isRequired,
        nomeRepo: PropTypes.string.isRequired,
        totaleCommit: PropTypes.number.isRequired,
        dataCreazione: PropTypes.string.isRequired,
        ultimoAggiornamento: PropTypes.string.isRequired,
        dattagli: PropTypes.arrayOf(
            PropTypes.shape({
                cognome: PropTypes.string.isRequired,
                nome: PropTypes.string.isRequired,
                utenteGithub: PropTypes.string.isRequired,
                nomeRepo: PropTypes.string.isRequired,
                totaleCommit: PropTypes.number.isRequired,
                dataCreazione: PropTypes.string.isRequired,
                ultimoAggiornamento: PropTypes.string.isRequired,
            }),
        ),//.isRequired,
    }).isRequired,
};

const BigTable = (props) => {

    const repos = props.repos;

    const commit = props.commit;

    const CreateRows = (repos, commit) => {

        const [row, setRow] = useState([]);

        useEffect(() => {
            repos.map((repo, id) => {
                let temp = createData(repos[id].surname, repos[id].name, repos[id].login, repos[id].repoName, commit, repos[id].creationDate, repos[id].lastUpdate);
                setRow(row => [...row, temp]);
            })
        }, [])

        return row;

    }

    const rows = CreateRows(repos, commit);

    // const [arrayDettagli, setArrayDettagli] = useState([]);

    // const mapp = props.repos.map((student, id) => {
    //     return (
    //         <Row key={id} repos={props.repos[id]} commit={props.commit} arrayDettagli={arrayDettagli[id]} setArrayDettagli={setArrayDettagli[id]} />
    //     )
    // });

    return (
        //     <div>
        //         {/* <button onClick={() => handleCloseAllClick(arrayDettagli, setArrayDettagli)}>Chiudi tutti i dettagli</button> */}
        //         <div className='tableCont'>

        //             <table>
        //                 <tbody>
        //                     <tr>
        //                         <th>Cognome</th>
        //                         <th>Nome</th>
        //                         <th>Utente githb</th>
        //                         <th>Nome repo</th>
        //                         <th>Totale commit</th>
        //                         <th>Data creazione</th>
        //                         <th>Ultimo aggiornamento</th>
        //                         <th>Informazioni aggiuntive</th>
        //                     </tr>
        //                 </tbody>
        //                 {mapp}
        //             </table>
        //         </div>
        //     </div>

        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow sx={{ background: 'blue' }}>
                        <TableCell align="left">Cognome</TableCell>
                        <TableCell align="left">Nome</TableCell>
                        <TableCell align="left">utente Github</TableCell>
                        <TableCell align="left">nome Repo</TableCell>
                        <TableCell align="left">totale Commit</TableCell>
                        <TableCell align="left">data Creazione</TableCell>
                        <TableCell align="left">ultimo Aggiornamento</TableCell>
                        <TableCell align="left">Mostra dettagli</TableCell>
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