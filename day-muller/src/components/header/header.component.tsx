// src/components/Header.tsx
import { AppBar, Box, Button, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Menu } from '@mui/icons-material';


const Header: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = ['Página Inicial', 'Depoimentos', 'O que é EMDR', 'Serviços'];

  return (
    <AppBar position="sticky" color="default">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <img src="./assets/logo-day.webp" alt="Logo" style={{ height: 40 }} />
        </Typography>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          {menuItems.map((item) => (
            <Button key={item} sx={{ color: 'black', textTransform: 'none' }}>
              {item}
            </Button>
          ))}
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <Menu />
          </IconButton>
          <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
            <Box
              sx={{ width: 250 }}
              role="presentation"
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
            >
              <List>
                {menuItems.map((item) => (
                  <ListItem button key={item}>
                    <ListItemText>{item}</ListItemText>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
