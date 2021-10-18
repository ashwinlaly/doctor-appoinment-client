import React from 'react';
import Avatar from '@mui/material/Avatar';

const IconAvator = ({margin: m, component}) => {
    return (
        <React.Fragment>
            <Avatar sx={{ m, bgcolor: 'secondary.main' }}>
                {component}
            </Avatar>
        </React.Fragment>
    );
}

export default IconAvator;