import React from "react";
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@emotion/react';

const ABP = () => {
  return (
    <Box sx={{ p: 6, bgcolor: 'gray.100', minHeight: '100vh' }}>
      <Typography variant="h1" sx={{ fontSize: '2xl', fontWeight: 'bold', mb: 6 }}>ABP</Typography>

      {/* Graphs */}
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 4, mb: 6 }}>
        {/* Haematological Graph */}
        <Box sx={{ bgcolor: 'white', p: 6, borderRadius: 'md', boxShadow: 'md' }}>
          <Typography variant="h3" sx={{ fontSize: 'lg', fontWeight: 'bold', mb: 4 }}>Haematological Graph</Typography>
          <Box sx={{ height: '40', bgcolor: 'gray.200', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography sx={{ color: 'gray.500' }}>Graph Placeholder</Typography>
          </Box>
        </Box>

        {/* Steroidal Graph */}
        <Box sx={{ bgcolor: 'white', p: 6, borderRadius: 'md', boxShadow: 'md' }}>
          <Typography variant="h3" sx={{ fontSize: 'lg', fontWeight: 'bold', mb: 4 }}>Steroidal Graph</Typography>
          <Box sx={{ height: '40', bgcolor: 'gray.200', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography sx={{ color: 'gray.500' }}>Graph Placeholder</Typography>
          </Box>
        </Box>
      </Box>

      {/* ABP Reports */}
      <Box sx={{ bgcolor: 'white', p: 6, borderRadius: 'md', boxShadow: 'md' }}>
        <Typography variant="h3" sx={{ fontSize: 'lg', fontWeight: 'bold', mb: 4 }}>ABP Reports</Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: 'gray.200' }}>
                <TableCell sx={{ p: 2, textAlign: 'left' }}>Name</TableCell>
                <TableCell sx={{ p: 2, textAlign: 'left' }}>Report ID</TableCell>
                <TableCell sx={{ p: 2, textAlign: 'left' }}>Return</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={{ p: 2 }}>Simran</TableCell>
                <TableCell sx={{ p: 2, color: 'blue.600' }}>#ATH76</TableCell>
                <TableCell sx={{ p: 2, color: 'green.500' }}>+5%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ p: 2 }}>Umesh</TableCell>
                <TableCell sx={{ p: 2, color: 'blue.600' }}>#ATH87</TableCell>
                <TableCell sx={{ p: 2, color: 'green.500' }}>+10%</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default ABP;