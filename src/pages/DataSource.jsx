import React from "react";
import { Box, Button, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@emotion/react';

const DataSource = () => {
  return (
    <Box sx={{ p: 6, bgcolor: 'gray.100', minHeight: '100vh' }}>
      <Typography variant="h1" sx={{ fontSize: '2xl', fontWeight: 'bold', mb: 6 }}>Data Source</Typography>
      
      {/* Tabs */}
      <Box sx={{ display: 'flex', gap: 4, mb: 6 }}>
        <Button sx={{ bgcolor: 'yellow.100', color: 'yellow.700', px: 4, py: 2, borderRadius: 'md' }}>ABP</Button>
        <Button sx={{ bgcolor: 'blue.100', color: 'blue.700', px: 4, py: 2, borderRadius: 'md' }}>Reports</Button>
        <Button sx={{ bgcolor: 'pink.100', color: 'pink.700', px: 4, py: 2, borderRadius: 'md' }}>Tests</Button>
        <Button sx={{ bgcolor: 'green.100', color: 'green.700', px: 4, py: 2, borderRadius: 'md' }}>Informer</Button>
      </Box>

      {/* Physical Performance Report */}
      <Box sx={{ bgcolor: 'white', p: 6, borderRadius: 'md', boxShadow: 'md', mb: 6 }}>
        <Typography variant="h3" sx={{ fontSize: 'lg', fontWeight: 'bold', mb: 4 }}>Physical Performance Report</Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: 'gray.200' }}>
                <TableCell sx={{ p: 2, textAlign: 'left' }}>Name</TableCell>
                <TableCell sx={{ p: 2, textAlign: 'left' }}>Report ID</TableCell>
                <TableCell sx={{ p: 2, textAlign: 'left' }}>Status</TableCell>
                <TableCell sx={{ p: 2, textAlign: 'left' }}>Time</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* Table Rows */}
              {/* ... (add rows similar to above) */}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Whistleblower Section */}
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 4 }}>
        {/* Whistleblower Info */}
        <Box sx={{ bgcolor: 'blue.500', color: 'white', p: 6, borderRadius: 'md', boxShadow: 'md' }}>
          <Typography variant="h3" sx={{ fontSize: 'lg', fontWeight: 'bold' }}>Whistleblower</Typography>
          <Typography variant="h1" sx={{ fontSize: '4xl', fontWeight: 'bold' }}>5</Typography>
          <Typography>New whistleblowers</Typography>
        </Box>
        {/* Bar Chart Placeholder */}
        <Box sx={{ bgcolor: 'white', p: 6, borderRadius: 'md', boxShadow: 'md' }}>
          <Typography variant="h3" sx={{ fontSize: 'lg', fontWeight: 'bold', mb: 4 }}>Cases & Informer Overview</Typography>
          <Box sx={{ height: '40', bgcolor: 'gray.200', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography sx={{ color: 'gray.500' }}>Bar Chart Placeholder</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DataSource;