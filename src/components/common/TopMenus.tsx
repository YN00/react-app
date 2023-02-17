import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { Link, Outlet } from 'react-router-dom';

import { findPathByName } from '../../router/findPathByName';

const navItems: string[] = ['Home', 'Analysis'];

const Menus = () => {
  return (
    <List style={{ display: 'flex' }}>
      {navItems.map((menu, i) => {
        return (
          <ListItem key={i}>
            <ListItemButton
              sx={{ textAlign: 'center' }}
            >
              <Link to={findPathByName(menu.toLowerCase())}>
                <span style={{ color: 'black' }}>{menu}</span>
              </Link>
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

const TopMenus = () => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Menus />
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default React.memo(TopMenus);
