//import './content.css';
import Totrepos from '../../components/totrepos/totrepos';
import BigTable from '../../components/table/table';
import Search from '../../components/search/search';
import Filter from '../../components/filter/filter';
import { useState, useEffect } from 'react';
import { listRepos } from '../../api/Repos';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import UpdateIcon from '@mui/icons-material/Update';

const Item = (props) => {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                bgcolor: 'rgb(143, 179, 126)',
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
    const [searchValue, setSearchValue] = useState('');

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
                                gap: 4,
                                marginBottom: '3%'
                            }}
                        >
                            <Item sx={{ gridRow: '1', gridColumn: '1/2', padding: '5%' }}><Totrepos totRepos={repos.length} /></Item>
                            <Item sx={{ gridRow: '1', gridColumn: '2/3', padding: '5%' }}><Filter /></Item>
                            <Item sx={{ gridRow: '1', gridColumn: '3/4', padding: '5%' }}><Search setSearchValue={setSearchValue}/></Item>
                            <Item sx={{ gridRow: '2', gridColumn: '2/3', padding: '5%' }}><Button variant="outlined" sx={{color: 'black', borderColor: 'black' }} startIcon={<UpdateIcon />} onClick={() => handleLoadClick(commit)}>Aggiorna Repos</Button></Item>
                        </Box>
                        <BigTable repos={repos} commit={commit} searchValue={searchValue} />

                    </Container>
                </div>)
            }
        </div>
    )
}

export default Content;

//beta.reactjs.org/learn