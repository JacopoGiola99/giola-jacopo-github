//import './Row.css';
import { DateTime } from "luxon";
import * as React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Link } from 'react-router-dom';

// Data formato italiano  
const formatDateCreation = (date) => {
    const result = DateTime.fromISO(date).setLocale('it').toFormat('dd LLLL yyyy');
    return result;
}
const formatDateUpdate = (date) => {
    const result = DateTime.fromISO(date).setLocale('it').toFormat('dd LLLL yyyy HH:mm');
    return result;
}

const Row = (props, key) => {
    const { row } = props;
    const totCommit = props.commit;
    const [open, setOpen] = React.useState(false);
    const id = 'repos' + props.row.id;

    return (
        <React.Fragment>
            <TableRow key={id} sx={{ '& > *': { borderBottom: 'unset', background: 'rgb(0, 151, 121)' } }}>
                <TableCell align="left">{row.cognome}</TableCell>
                <TableCell align="left">{row.nome}</TableCell>
                <TableCell align="left">{row.utenteGithub}</TableCell>
                <TableCell align="left">{row.nomeRepo}</TableCell>
                <TableCell align="left">{totCommit}</TableCell>
                <TableCell align="left">{formatDateCreation(row.dataCreazione)}</TableCell>
                <TableCell align="left">{formatDateUpdate(row.ultimoAggiornamento)}</TableCell>
                <TableCell>
                    {
                        open ?
                            <Link to={`/repos`}>
                                <IconButton
                                    aria-label="expand row"
                                    size="small"
                                    onClick={() => setOpen(!open)}
                                >
                                    {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                </IconButton>
                            </Link>
                            :
                            <Link to={`/detail/${row.idRepo}`}>
                                <IconButton
                                    aria-label="expand row"
                                    size="small"
                                    onClick={() => setOpen(!open)}
                                >
                                    {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                </IconButton>
                            </Link>
                    }
                </TableCell>
            </TableRow>
            <TableRow key={"detail" + id}>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0, background: 'rgb(222, 142, 73)' }} colSpan={8} >
                    <Collapse in={open} timeout="auto" unmountOnExit >
                        <Table aria-label="dettagli" >
                            <TableBody>
                                {row.dettagli.map((dettagliRow) => (
                                    <TableRow key={"date" + dettagliRow.date}>
                                        <TableCell align="left">{dettagliRow.cognome}</TableCell>
                                        <TableCell align="left">{dettagliRow.nome}</TableCell>
                                        <TableCell align="left">{dettagliRow.utenteGithub}</TableCell>
                                        <TableCell align="left">{dettagliRow.nomeRepo}</TableCell>
                                        <TableCell align="left">{totCommit}</TableCell>
                                        <TableCell align="left">{formatDateCreation(dettagliRow.dataCreazione)}</TableCell>
                                        <TableCell align="left">{formatDateUpdate(dettagliRow.ultimoAggiornamento)}</TableCell>
                                        <TableCell align="left"></TableCell>
                                    </TableRow>
                                ))}
                                {/* <Outlet /> */}
                            </TableBody>
                        </Table>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment >
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

export default Row;