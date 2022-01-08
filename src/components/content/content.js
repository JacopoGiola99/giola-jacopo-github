//import './content.css';
import Totrepos from '../totrepos/totrepos';
import BigTable from '../table/table';
import Search from '../search/search';
import Filter from '../filter/filter';
import { useState, useEffect } from 'react';
import { listRepos } from '../../Api/Repos';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import UpdateIcon from '@mui/icons-material/Update';

const Item = (props) => {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                bgcolor: 'orange',
                color: 'black',
                p: 1,
                borderRadius: 1,
                textAlign: 'center',
                fontSize: '1rem',
                fontWeight: '700',
                ...sx,
            }}
            {...other}
        />
    );
}

const Content = () => {
    const [repos, setRepos] = useState(undefined);
    const [commit, setCommit] = useState(0);

    useEffect(() => {
        const populateRepos = async () => {
            setRepos(await listRepos());
        };
        populateRepos();
    }, [])

    const handleLoadClick = (commit) => {
        const populateRepos = async () => {
            setRepos(await listRepos());
            setCommit(commit + 1);
        };
        populateRepos();
    }

    return (
        <div>
            {repos && (
                <div>
                    <Container sx={{ height: 'fit-content', border: '1px solid red', minWidth: '90%', marginTop: '3%', padding: '2%' }}>
                        <Box
                            sx={{
                                display: 'grid',
                                gridAutoColumns: '1fr',
                                gap: 1,
                            }}
                        >
                            <Item sx={{ gridRow: '1', gridColumn: '1/2', width: '40%', padding: '5%', maxHeight: '35%', minWidth: '80%' }}><Totrepos totRepos={repos.length} /></Item>
                            <Item sx={{ gridRow: '1', gridColumn: '2/3', width: '40%', padding: '5%', maxHeight: '35%', minWidth: '80%' }}><Filter /></Item>
                            <Item sx={{ gridRow: '1', gridColumn: '3/4', width: '40%', padding: '5%', maxHeight: '35%', minWidth: '80%' }}><Search /></Item>
                            <Item sx={{ gridRow: '2', gridColumn: '2/3', width: '40%', padding: '5%', maxHeight: '35%', minWidth: '80%', marginBottom: '3%' }}><Button variant="outlined" startIcon={<UpdateIcon />} onClick={() => handleLoadClick(commit)}>Aggiorna Repos</Button></Item>
                        </Box>
                        <BigTable repos={repos} commit={commit} />

                    </Container>
                </div>)
            }
        </div>
    )
}

export default Content;

//beta.reactjs.org/learn