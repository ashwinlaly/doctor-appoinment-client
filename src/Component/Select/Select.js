import React from 'react';
import {default as InputSelect}  from '@mui/material/Select';
import MenuItem  from '@mui/material/MenuItem';
import InputLabel  from '@mui/material/InputLabel';
import FormControl  from '@mui/material/FormControl';

const Select = ({id, label, defaltValue, options, handleChange}) => {
    return (
        <FormControl sx={{ m: 1, width: 400 }}>
            <InputLabel id="demo-simple-select-autowidth-label">{label}</InputLabel>
            <InputSelect
                    id={id}
                    autoWidth
                    label={label}
                    value={defaltValue}
                    onChange={handleChange}
                >
                {options.map((item, index) => <MenuItem key={index} value={item.id}>{item.value}</MenuItem>)}
            </InputSelect>
        </FormControl>
    );
}

export default Select;