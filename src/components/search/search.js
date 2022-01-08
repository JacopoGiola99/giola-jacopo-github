import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
    return (
        <div className='search'>
            <TextField id="searchButton" label="Cerca" />
            <Button variant="outlined" startIcon={<SearchIcon fontSize='large'/>} sx={{float: 'right', padding:'2%'}}></Button>
        </div>
    )
}

export default Search;