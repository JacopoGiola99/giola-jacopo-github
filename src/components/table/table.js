import { useState, useEffect } from 'react';
import * as React from 'react';
import PropTypes from 'prop-types';
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

const Row = (props, key) => {
    const { row } = props;
    const totCommit = props.commit;
    const [open, setOpen] = React.useState(false);
    const id = props.row.id;

    return (
        <React.Fragment>
            <TableRow key={id} sx={{ '& > *': { borderBottom: 'unset', background: 'rgb(0, 151, 121)' } }}>
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
                <TableCell style={{ paddingBottom: 0, paddingTop: 0, background: 'rgb(222, 142, 73)' }} colSpan={8} >
                    <Collapse in={open} timeout="auto" unmountOnExit >
                        <Table aria-label="dettagli" >
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
        id: PropTypes.number.isRequired,
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
        ),
    }).isRequired,
};

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