import Box from '@mui/material/Box';

const Totrepos = (props) => {
    return (
        <div className='totrepos'>
            <Box component="span" sx={{ p: 2, padding:'5%' }}>
                Totale repos: {props.totRepos}
            </Box>
        </div>
    )
}

export default Totrepos;