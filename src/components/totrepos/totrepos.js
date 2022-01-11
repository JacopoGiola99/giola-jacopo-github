import Container from '@mui/material/Container';

const Totrepos = (props) => {
    return (
        <div className='totrepos'>
            <Container sx={{ paddingTop: '5%' }} >
                Totale repos: {props.totRepos}
            </Container>
        </div>
    )
}

export default Totrepos;