import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import Button from '../../Component/Button/Button';
import TextBox from '../../Component/TextBox/TextBox';
import IconAvator from '../../Component/IconAvator/IconAvator';

import {history} from '../../Routes/history';
import {authLogin} from '../../Redex/Auth/auth-actions';

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

const SignIn = ({token, login, error}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if(token) {
      history.push("/appoinments");
    }
  }, [token]);

  const handleSubmit = (event) => {
    event.preventDefault();
    let doctorCredentials = {
      email, password
    };
    login(doctorCredentials);
  };

  return (
    <React.Fragment>
      <SignInBox>
        <Container component="main" maxWidth="xs">
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <IconAvator sx={{mt: 10}} component={<LockOutlinedIcon />} margin={3} />
              <Typography component="h1" variant="h5"> Sign In </Typography>
              <TextBox id="email" name="email" label="User Email" type="email" required={true} onChange={(e) => setEmail(e.target.value)}/>
              <TextBox id="password" name="password" type="password" label="Password" required={true} onChange={(e) => setPassword(e.target.value)}/>
              <Button label="Sign In" type="submit" onClick={handleSubmit}/>
              {error?.map((item, index) => <li key={index}>{item.msg}</li>)}
            </Box>
        </Container>
      </SignInBox>
    </React.Fragment>
  );
}

const mapStateProps = (state) => {
  return {
    error: state.authData.error,
    token: state.authData.token
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (data) => dispatch(authLogin(data))
  };
};

export default connect(mapStateProps, mapDispatchToProps)(SignIn);