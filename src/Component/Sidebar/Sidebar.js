import React from 'react';
import { Link } from 'react-router-dom';

import List from '@mui/material/List';
import { Drawer } from '../SideBarDrawer';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import LockOutlined from '@mui/icons-material/LockOutlined';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import { privateRoutesList } from '../../Config/routes';

const Sidebar = ({open, toggleDrawer, setOpen}) => {
    const handleLogout = () => {
      localStorage.removeItem('token');
      window.location.href="";
    }
    return (
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
        <Divider />
        <List>
          {privateRoutesList.map((item, index) => {
            return (
              <Link to={item.to} key={index} style={{color: '#000', textDecoration: "none"}}>
                <ListItemButton>
                  <ListItemIcon>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </Link>
            );
          })}
          <ListItemButton>
            <ListItemIcon>
              <LockOutlined />
            </ListItemIcon>
            <ListItemText primary="Logout" onClick={handleLogout}/>
          </ListItemButton>
        </List>
      </Drawer>
    );
}

export default Sidebar;