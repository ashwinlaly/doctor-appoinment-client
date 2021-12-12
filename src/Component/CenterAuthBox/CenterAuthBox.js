import React from 'react';
import Box from '@mui/material/Box';

const CenterAuthBox = (props) => {
    return (
        <React.Fragment>
            <Box sx={{
            marginTop: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            }}> {props.children} </Box>
        </React.Fragment>
    );
};

export default CenterAuthBox;