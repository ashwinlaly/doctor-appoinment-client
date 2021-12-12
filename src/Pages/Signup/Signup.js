import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import Button from '../../Component/Button/Button';
import Select from '../../Component/Select/Select';
import TextBox from '../../Component/TextBox/TextBox';
import IconAvator from '../../Component/IconAvator/IconAvator';
import CenterAuthBox from '../../Component/CenterAuthBox/CenterAuthBox';

import { history } from '../../Routes/history';
import { authSignup } from '../../Redex/Auth/auth-actions';
import { getAllDocTypeCategory } from '../../Redex/DoctorType/doctorType-actions';

const Signup = ({ doctorTypes, authErrors, getDocTypes, signup }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [category, setCategory] = useState('');

    useEffect(() => {
        getDocTypes();
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        let data = { name, email, phone, password, category };
        signup(data);
    }

    return (
        <Fragment>
            <CenterAuthBox>
                <Container component="main" maxWidth="xs">
                    <Box component="form" noValidate sx={{ mt: 1 }}>
                        <IconAvator sx={{mt: 14, pl: 10}} component={<LockOutlinedIcon />} margin={3} />
                        <Typography component="h1" variant="h5"> Create an account </Typography>
                        <TextBox id="name" name="name" label="Doctor Name" type="text" required={true} onChange={(e) => setName(e.target.value)} />
                        <TextBox id="email" name="email" label="Doctor Email" type="email" required={true} onChange={(e) => setEmail(e.target.value)} />
                        <TextBox id="phone" name="phone" label="Phone " type="text" required={true} onChange={(e) => setPhone(e.target.value)} />
                        <TextBox id="password" name="password" type="password" label="Password" required={true} onChange={(e) => setPassword(e.target.value)} />
                        <Select id="category" name="category" label="Select Category" defaltValue={category} handleChange={(e) => setCategory(e.target.value)} options={doctorTypes} idName="_id" valueName="category_name"/>
                        <Button label="Sign up" type="submit" onClick={handleSubmit}/>
                        <Link component="button" onClick={() => { history.push("/") }}> Already have an account </Link>
                        {authErrors?.map((item, index) => <li key={index}>{item.msg}</li>)}
                    </Box>
                </Container>
            </CenterAuthBox>
        </Fragment>
    );
};

const mapStateToProps = (state) => {
    return {
        authErrors: state.authData.error,
        doctorTypes: state.doctorTypeData.doctorTypes
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getDocTypes: () => dispatch(getAllDocTypeCategory()),
        signup: (data) => dispatch(authSignup(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);