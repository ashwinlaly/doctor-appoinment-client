import React, {Fragment} from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Switch, Router, Route } from 'react-router-dom';

import { history } from '../../Routes/history';
import Header from '../../Component/Header/Header';
import Sidebar from '../../Component/Sidebar/Sidebar';
import { privateRoutesList } from '../../Config/routes';

const DashboardContent = () => {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Fragment>
      <Box sx={{ display: 'flex' }}>
        <Header open={open} toggleDrawer={toggleDrawer} setOpen={setOpen}/>
        <Sidebar open={open} toggleDrawer={toggleDrawer} setOpen={setOpen}/>
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: '100vh',
              overflow: 'auto',
            }}
          >
          <Toolbar />
          
          <Router history={history}>
            <Switch>
               {privateRoutesList.map((route, index) => {
                 return (
                  <Route 
                    key={index}
                    exact={true}
                    path={route.to}
                    component={route.component} />
                 );
               })}
            </Switch>
          </Router>

        </Box>
      </Box>
    </Fragment>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}