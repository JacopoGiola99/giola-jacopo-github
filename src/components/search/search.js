import TextField from '@mui/material/TextField';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
    return (
        <div className='search'>
            <TextField id="searchButton" label="Cerca" />
            <IconButton variant="outlined" sx={{float: 'right', padding:'4%'}}><SearchIcon fontSize="large" /></IconButton>
        </div>
    )
}

export default Search;