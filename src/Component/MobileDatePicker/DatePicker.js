import React from 'react';
import TextField from '@mui/material/TextField';
import DateAdapter from '@mui/lab/AdapterMoment';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

const DatePicker = ({label = "Date ", value, onChange}) => {
    return (
        <LocalizationProvider dateAdapter={DateAdapter}>
            <MobileDatePicker
                label={label}
                inputFormat="M/DD/yyyy"
                value={value}
                onChange={onChange}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    );
}


export default DatePicker;