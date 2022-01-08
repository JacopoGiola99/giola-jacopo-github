// import './title.css';
// import Logo from '../logo/logo';
import ButtonTitle from '../button-title/button-title';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const Item = (props) => {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                bgcolor: 'primary.main',
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

const Title = () => {
    return (
        <div className='title'>
            <Container sx={{ height: 'fit-content', border: '1px solid red', padding: '10px', minWidth: '90%' }}>
                <Box
                    sx={{
                        display: 'grid',
                        gridAutoColumns: '1fr',
                        gap: 1,
                    }}
                >
                    <Item sx={{ gridRow: '1', gridColumn: '0/1', width: '40%', padding: '5%', maxHeight: '35%', minWidth: '80%' }}>Logo</Item>
                    
                    <Item sx={{ gridRow: '1', gridColumn: '4 / 5' }}><ButtonTitle /></Item>
                </Box>
            </Container>
        </div>
    )
}

export default Title;