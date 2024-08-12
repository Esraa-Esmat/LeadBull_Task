import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const GradientTableRow = styled(TableRow)(({ theme }) => ({
  background: 'linear-gradient(90deg, rgba(80, 205, 255, .8) 0%, rgba(122, 102, 255, .8) 100%)',
  color: theme.palette.common.white,
}));

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  borderRadius: '15px',

  backgroundColor: 'transparent',

}));

const rows = [
  { name: 'Total', leads: '6,784', nonInterested: '9,924', bouncers: '2,156' },
  { name: 'Today', leads: '821', nonInterested: '959', bouncers: '170' },
  { name: 'This month', leads: '5,963', nonInterested: '8,965', bouncers: '1,986' },
];

export default function CustomTable() {
  return (
    <StyledTableContainer >
      <Table aria-label="customized table" >
        <TableHead>
          <GradientTableRow>
            <TableCell></TableCell>
            <TableCell align="center">New Active Leads</TableCell>
            <TableCell align="center">Non Interested</TableCell>
            <TableCell align="center">Bouncers</TableCell>
          </GradientTableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row" className='text-light'>
                {row.name}
              </TableCell>
              <TableCell align="center" style={{ color: 'white' }}>{row.leads}</TableCell>
              <TableCell align="center" style={{ color: 'white' }}>{row.nonInterested}</TableCell>
              <TableCell align="center" style={{ color: 'white' }}>{row.bouncers}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
}
