//import './button-title.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import ArticleIcon from '@mui/icons-material/Article';
import { Link } from 'react-router-dom';

const buttons = [
    <Link to="/login"><Button style={{color:'black'}} key="ButtonLogin" startIcon={<LoginIcon />}></Button></Link>,
    <Link to="/logout"><Button style={{color:'black'}} key="ButtonLogout" startIcon={<LogoutIcon />}></Button></Link>,
    <Link to="/classi"><Button style={{color:'black'}} key="ButtonClassi" startIcon={<SchoolIcon />}></Button></Link>,
    <Link to="/utenti"><Button style={{color:'black'}} key="ButtonUtenti" startIcon={<PersonIcon />}></Button></Link>,
    <Link to="/repositories"><Button style={{color:'black'}} key="ButtonRepoTable" startIcon={<ArticleIcon />}></Button></Link>,
];

const ButtonTitle = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                '& > *': {
                    m: 1,
                },
            }}
        >
            <ButtonGroup color="inherit" aria-label="small button group">
                {buttons}
            </ButtonGroup>
        </Box>
    )
}

export default ButtonTitle;