import React from "react";
import { Box, Typography, List, ListItem } from '@emotion/react';

const Sidebar = () => {
  return (
    <Box sx={{ width: '250px', bgcolor: 'gray.800', color: 'white', p: 4 }}>
      <Typography variant="h2" sx={{ fontSize: 'xl', fontWeight: 'bold', mb: 4 }}>Menu</Typography>
      <List>
        <ListItem sx={{ p: 2, '&:hover': { bgcolor: 'gray.700' } }}>Dashboard</ListItem>
        <ListItem sx={{ p: 2, '&:hover': { bgcolor: 'gray.700' } }}>Data Source</ListItem>
        <ListItem sx={{ p: 2, '&:hover': { bgcolor: 'gray.700' } }}>ABP</ListItem>
        <ListItem sx={{ p: 2, '&:hover': { bgcolor: 'gray.700' } }}>Case List</ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;