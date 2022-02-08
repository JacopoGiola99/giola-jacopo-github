import TextField from '@mui/material/TextField';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Search = (props) => {

    const OnSearchClick = (props) => {
        const value = document.getElementById('searchButton').value;
        props.setSearchValue(value);
    }

    return (
        <div className='search'>
            <TextField onChange={() => OnSearchClick(props)} id="searchButton" label="Cerca" />
            <IconButton onClick={() => OnSearchClick(props)} variant="outlined" sx={{ float: 'right', padding: '4%' }}><SearchIcon fontSize="large" /></IconButton>
        </div>
    )
}

export default Search;