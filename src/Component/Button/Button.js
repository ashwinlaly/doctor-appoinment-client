import React from 'react';
import { default as MaterialButton} from '@mui/material/Button';

const Button = ({label, type}) => {
    return (
        <React.Fragment>
            <MaterialButton
                fullWidth
                type={type}
                variant="contained"
                sx={{ mt: 3, mb: 1 }}
            >
                {label}
            </MaterialButton>
        </React.Fragment>
    )
}

export default Button;