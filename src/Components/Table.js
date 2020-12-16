import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {red,green} from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 800,
  },
});
const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(red[500]),
      backgroundColor: red[500],
      marginLeft: '4px',
      '&:hover': {
        backgroundColor: red[700],
      },
    },
  }))(Button);

  const AddBtn = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(red[500]),
      backgroundColor: green[500],
      '&:hover': {
        backgroundColor: red[500],
        color: theme.palette.getContrastText(red[500]),
      },
    },
  }))(Button);

export default function ProductTable({
  productsArray,
  deleteProduct,
  editProduct,
  showEditForm
  
}) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table
        className={classes.table}
        size="small"
        aria-label="customized table"
      >
        <TableHead>
          <TableRow>
            <StyledTableCell>Название товара</StyledTableCell>
            <StyledTableCell align="center">Категория</StyledTableCell>
            <StyledTableCell align="center">Цена</StyledTableCell>
            <StyledTableCell align="center">Остаток на складе</StyledTableCell>
            <StyledTableCell align="right">
              <AddBtn 
              variant="contained" 
              color="secondary"
              onClick = {()=> showEditForm()}
              >
                Добавить
              </AddBtn>
            </StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {productsArray.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.category}</StyledTableCell>
              <StyledTableCell align="center">
                {row.price}&nbsp;$
              </StyledTableCell>
              <StyledTableCell align="center">{row.balance}</StyledTableCell>
              <StyledTableCell align="right">
                <ColorButton
                  variant="contained"
                  color="secondary"
                  id={row.id}
                  onClick={() => deleteProduct(row.id)}
                >
                  Удалить
                </ColorButton>

                <ColorButton
                  variant="contained"
                  color="secondary"
                  id={row.id}
                  onClick={() => editProduct(row.id)}
                >
                  Изменить
                </ColorButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
