import { useParams } from "react-router-dom";
import { DateTime } from "luxon";
import { UseRepos } from "../hooks/useRepos";
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from "react";

// Data formato italiano  
const formatDateCreation = (date) => {
    const result = DateTime.fromISO(date).setLocale('it').toFormat('dd LLLL yyyy');
    return result;
}
const formatDateUpdate = (date) => {
    const result = DateTime.fromISO(date).setLocale('it').toFormat('dd LLLL yyyy HH:mm');
    return result;
}

const Details = () => {

    const [detail, setDetail] = useState(undefined);

    const params = useParams();

    const { repos } = UseRepos();

    useEffect(() => {
        const filtered = repos.find(repo => repo.idRepo === parseInt(params.idRepo));
        setDetail(filtered);
    }, [repos, params.idRepo])

    return <>
        {detail &&
            <TableRow>
                <TableCell align="left">{detail.surname}</TableCell>
                <TableCell align="left">{detail.name}</TableCell>
                <TableCell align="left">{detail.login}</TableCell>
                <TableCell align="left">{detail.repoName}</TableCell>
                <TableCell align="left">0</TableCell>
                <TableCell align="left">{formatDateCreation(detail.creationDate)}</TableCell>
                <TableCell align="left">{formatDateUpdate(detail.lastUpdate)}</TableCell>
                <TableCell align="left"></TableCell>
            </TableRow>
        }
        {!detail && <h2>Ricerca...</h2>}
    </>
}

export default Details;
