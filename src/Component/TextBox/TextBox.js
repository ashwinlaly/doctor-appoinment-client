import React from 'react';
import TextField from '@mui/material/TextField';

const TextBox = (props) => {
    return (
        <React.Fragment>
            <TextField
                fullWidth
                {...props}
                margin="normal"
                type={(props.hasOwnProperty("type") === true) ? props.type: "text"}
            />
        </React.Fragment>
    )
}

export default TextBox;