import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

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
              href={findPathByName(menu.toLowerCase())}
            >
              <ListItemText primary={menu} />
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
      <AppBar position="static">
        <Toolbar>
          <Menus />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default TopMenus;
