import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import Button from '../../Component/Button/Button';
import TextBox from '../../Component/TextBox/TextBox';
import IconAvator from '../../Component/IconAvator/IconAvator';

const SignInBox = (props) => {
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

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <React.Fragment>
      <SignInBox>
        <Container component="main" maxWidth="xs">
          <IconAvator component={<LockOutlinedIcon />} margin={3} />
          <Typography component="h1" variant="h5"> Sign In </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextBox id="email" name="email" label="User Email" type="password" required={true} />
            <TextBox id="password" name="password" type="password" label="Password" required={true} />
            <Button label="Sign In" type="submit" />
          </Box>
        </Container>
      </SignInBox>
    </React.Fragment>
  );
}