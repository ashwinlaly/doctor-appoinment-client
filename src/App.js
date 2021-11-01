import React, {Fragment, useEffect} from 'react';
import {connect} from 'react-redux';
import { ToastContainer } from 'react-toastify';
// import LinearProgress from '@mui/material/LinearProgress';

import Routes from './Routes/index';
import {history} from './Routes/history';

const App = ({token, loading}) => {
  useEffect(() => {
    if(!token) {
      history.push("/");
    }
  }, [token]);
  return (
    <Fragment>
      {/* {loading && <LinearProgress />} */}
      <Routes/>
      <ToastContainer />
    </Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    token: state.authData.token,
    loading: state.authData.loading,
  };
};

export default connect(mapStateToProps)(App);