import React from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {green} from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      background: 'rgba(255, 255, 255, 0.952);',
      borderRadius: '4px',
    },
  },
}));

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
}))(Button);

export default function Form({
  setName,
  setCategory,
  setPrice,
  setBalance,
  addProduct,
  onBlurName,
  onBlurCategory,
  onBlurPrice,
  onBlurBalance,
  getErrorMessage,
  formState,
  closePopup,
  confirmEditOnProduct,
  editOnProductFlag,
  validation,
}) {
  const classes = useStyles();
  const {
    nameProduct,
    categoryProduct,
    priceProduct,
    stockBalanceProduct,
    disabledSubmitBtn,
  } = formState;
  const {
    errorNameLengthFlag,
    errorNameIsNumberFlag,
    errorCategoryLengthFlag,
    errorCategoryIsNumberFlag,
    errorPriceIsStringFlag,
    errorBalanceIsStringFlag,
  } = validation;

  const textButton = {
    change: 'Изменить',
    add: 'Добавить',
  };

  return (
    <>
      <div className="overlay-form" onClick={() => closePopup()} />
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          error={errorNameLengthFlag || errorNameIsNumberFlag}
          id="outlined-basic"
          label={errorNameLengthFlag ? 'Ошибка' : 'Название товара'}
          variant="outlined"
          value={nameProduct}
          helperText={getErrorMessage(
            errorNameLengthFlag,
            errorNameIsNumberFlag
          )}
          onChange={(e) => setName(e.target.value)}
          onBlur={onBlurName}
        />

        <TextField
          error={errorCategoryLengthFlag || errorCategoryIsNumberFlag}
          id="outlined-basic"
          label={errorCategoryLengthFlag ? 'Ошибка' : 'Категория'}
          variant="outlined"
          value={categoryProduct}
          onChange={(e) => setCategory(e.target.value)}
          onBlur={onBlurCategory}
          helperText={getErrorMessage(
            errorCategoryLengthFlag,
            errorCategoryIsNumberFlag
          )}
        />

        <TextField
          error={errorPriceIsStringFlag}
          id="outlined-basic"
          label="Цена"
          variant="outlined"
          value={priceProduct}
          helperText={errorPriceIsStringFlag ? 'Введите число' : ''}
          onChange={(e) => setPrice(e.target.value)}
          onBlur={onBlurPrice}
        />

        <TextField
          error={errorBalanceIsStringFlag}
          id="outlined-basic"
          label="Остаток на складе"
          variant="outlined"
          value={stockBalanceProduct}
          onChange={(e) => setBalance(e.target.value)}
          onBlur={onBlurBalance}
          helperText={errorBalanceIsStringFlag ? 'Введите число' : ''}
        />

        <ColorButton
          variant="contained"
          color="primary"
          onClick={editOnProductFlag ? confirmEditOnProduct : addProduct}
          disabled={disabledSubmitBtn}
        >
          {editOnProductFlag ? textButton.change : textButton.add}
        </ColorButton>
      </form>
    </>
  );
}
