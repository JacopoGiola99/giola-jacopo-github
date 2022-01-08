//import './button-title.css';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

const ButtonTitle = () => {
    return (
        <div className='button-title'>
            <Breadcrumbs aria-label="breadcrumb" sx={{ padding: '5px', marginLeft: '7.5%' }}>
                <Link underline="hover" color="inherit" href="/" >
                    Visualizza repos
                </Link>
                <Link
                    underline="hover"
                    color="inherit"
                    href="/"
                >
                    Nuovo utente
                </Link>
            </Breadcrumbs>
        </div>
    )
}

export default ButtonTitle;