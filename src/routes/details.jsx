import { useParams } from "react-router-dom";
import { DateTime } from "luxon";
import { UseRepos } from "../hooks/useRepos";
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from "react";
import { useDetailApi } from "../hooks/useDetailApi";
//import { useDetailApi } from "../hooks/useDetailApi";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';

// Data formato italiano  
// const formatDateCreation = (date) => {
//     const result = DateTime.fromISO(date).setLocale('it').toFormat('dd LLLL yyyy');
//     return result;
// }
const formatDateUpdate = (date) => {
    const result = DateTime.fromISO(date).setLocale('it').toFormat('dd LLLL yyyy HH:mm');
    return result;
}

const FindData = (repos, setDetail, params) => {
    useEffect(() => {
        const filtered = repos.find(repo => repo.idRepo === parseInt(params.idRepo));
        setDetail(filtered);
    }, [repos, params.idRepo, setDetail]);
}

const DetailKeys = (setDetailLogin, setDetailRepoName, detail) => {
    setDetailLogin(detail.login);
    setDetailRepoName(detail.repoName);
}

const Details = () => {

    const [detail, setDetail] = useState(undefined);
    const [detailLogin, setDetailLogin] = useState('');
    const [detailRepoName, setDetailRepoName] = useState('');

    const params = useParams();

    const { repos } = UseRepos();

    FindData(repos, setDetail, params);

    if (detail !== undefined && detailLogin === '' && detailRepoName === '') {
        DetailKeys(setDetailLogin, setDetailRepoName, detail);
    }

    const { details } = useDetailApi(detailLogin, detailRepoName);

    return <>
        {details &&
            <TableContainer component={Paper} >
                <Table aria-label="collapsible table" >
                    <TableHead >
                        <TableRow sx={{ background: 'rgb(8, 72, 135)' }}>
                            <TableCell style={{ color: 'white' }} align="left">Nome</TableCell>
                            <TableCell style={{ color: 'white' }} align="left">Email</TableCell>
                            <TableCell style={{ color: 'white' }} align="left">Data</TableCell>
                            <TableCell style={{ color: 'white' }} align="left">Messaggio</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {details.map((dettaglio, key) => (
                            <TableRow key={key} sx={{ background: 'rgb(0, 151, 121)' }}>
                                <TableCell style={{ color: 'white' }} align="left">{dettaglio.committer.name}</TableCell>
                                <TableCell style={{ color: 'white' }} align="left">{dettaglio.committer.email}</TableCell>
                                <TableCell style={{ color: 'white' }} align="left">{formatDateUpdate(dettaglio.committer.date)}</TableCell>
                                <TableCell style={{ color: 'white' }} align="left">{dettaglio.message}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        }
        {!detail && <h2>Ricerca...</h2>}
    </>
}

export default Details;
