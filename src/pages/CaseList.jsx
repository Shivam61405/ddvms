import React from "react";
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@emotion/react';

const CaseList = () => {
  return (
    <Box sx={{ p: 6, bgcolor: 'gray.100', minHeight: '100vh' }}>
      <Typography variant="h1" sx={{ fontSize: '2xl', fontWeight: 'bold', mb: 6 }}>Case List</Typography>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: 'gray.200' }}>
              <TableCell sx={{ p: 2, textAlign: 'left' }}>Case ID</TableCell>
              <TableCell sx={{ p: 2, textAlign: 'left' }}>Description</TableCell>
              <TableCell sx={{ p: 2, textAlign: 'left' }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell sx={{ p: 2 }}>#C001</TableCell>
              <TableCell sx={{ p: 2 }}>Investigation ongoing</TableCell>
              <TableCell sx={{ p: 2, color: 'orange.500' }}>In Progress</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ p: 2 }}>#C002</TableCell>
              <TableCell sx={{ p: 2 }}>Closed case</TableCell>
              <TableCell sx={{ p: 2, color: 'green.500' }}>Closed</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CaseList;