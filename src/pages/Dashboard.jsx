import React from "react";
import { Box, Typography } from '@emotion/react';

const Dashboard = () => {
  return (
    <Box sx={{ p: 6, bgcolor: 'gray.100', minHeight: '100vh' }}>
      <Typography variant="h1" sx={{ fontSize: '2xl', fontWeight: 'bold', mb: 6 }}>Dashboard</Typography>

      {/* Stats Section */}
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 4, mb: 6 }}>
        <Box sx={{ bgcolor: 'blue.500', color: 'white', p: 6, borderRadius: 'md', boxShadow: 'md' }}>
          <Typography sx={{ fontSize: 'lg' }}>In last 24 hours</Typography>
          <Typography sx={{ fontSize: '4xl', fontWeight: 'bold' }}>27</Typography>
 <Typography>New Reports</Typography>
        </Box>
        <Box sx={{ bgcolor: 'green.500', color: 'white', p: 6, borderRadius: 'md', boxShadow: 'md' }}>
          <Typography sx={{ fontSize: 'lg' }}>Total Cases</Typography>
          <Typography sx={{ fontSize: '4xl', fontWeight: 'bold' }}>150</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;