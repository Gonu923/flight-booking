import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const TopNavigationBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">BRAC</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', flexGrow: 1 }}>
          <Button color="inherit">Sign In</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavigationBar;
