import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import * as React from 'react';

const options = ['Full-Stack-Developer 2020/2021', 'Full-Stack-Developer 2021/2022'];

const Filter = () => {
    const [value, setValue] = React.useState(options[0]);
    const [inputValue, setInputValue] = React.useState('');
    return (
        <div className='filter'>
            <Autocomplete
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                }}
                id="controllable-states-demo"
                options={options}
                sx={{ width: 300, marginBottom: '15%', marginLeft: '5%' }}
                renderInput={(params) => <TextField {...params} label="Classi" />}
            />
        </div>
    )
}

export default Filter;