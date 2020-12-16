import React, {Component} from 'react';
import './App.css';
import Form from './Components/Form';
import shortid from 'shortid';
import ProductTable from './Components/Table';
import Header from './Components/Header';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      nameProduct: '',
      categoryProduct: '',
      priceProduct: '',
      stockBalanceProduct: '',
      addProductFlag: false,
      editOnProductFlag: false,
      productId: null,
      disabledSubmitBtn: false,
      validation: {
        errorNameLengthFlag: false,
        errorNameIsNumberFlag: false,
        errorCategoryLengthFlag: false,
        errorCategoryIsNumberFlag: false,
        errorPriceIsStringFlag: false,
        errorBalanceIsStringFlag: false,
      },
    };
  }


// =================== Function for Validation start=========================


  onBlurName = () => {
    if (this.state.nameProduct.length.toString() < 3) {
      this.setState({
        ...this.state,
        validation: {errorNameLengthFlag: true},
        disabledSubmitBtn: true,
      });
    } else if (Number(this.state.nameProduct)) {
      this.setState({
        ...this.state,
        validation: {errorNameIsNumberFlag: true},
        disabledSubmitBtn: true,
      });
    } else {
      this.setState({...this.state, validation: {errorNameLengthFlag: false}});
      this.setState({
        ...this.state,
        validation: {errorNameIsNumberFlag: false},
        disabledSubmitBtn: false,
      });
    }
  };

  onBlurCategory = () => {
    if (this.state.categoryProduct.length.toString() < 3) {
      this.setState({
        ...this.state,
        validation: {errorCategoryLengthFlag: true},
        disabledSubmitBtn: true,
      });
    } else if (Number(this.state.categoryProduct)) {
      this.setState({
        ...this.state,
        validation: {errorCategoryIsNumberFlag: true},
        disabledSubmitBtn: true,
      });
    } else {
      this.setState({
        ...this.state,
        validation: {errorCategoryLengthFlag: false},
      });
      this.setState({
        ...this.state,
        validation: {errorCategoryIsNumberFlag: false},
        disabledSubmitBtn: false,
      });
    }
  };

  onBlurPrice = () => {
    if (!Number(this.state.priceProduct)) {
      this.setState({
        ...this.state,
        validation: {errorPriceIsStringFlag: true},
        disabledSubmitBtn: true,
      });
    } else {
      this.setState({
        ...this.state,
        validation: {errorPriceIsStringFlag: false},
        disabledSubmitBtn: false,
      });
    }
  };
  onBlurBalance = () => {
    if (!Number(this.state.stockBalanceProduct)) {
      this.setState({
        ...this.state,
        validation: {errorBalanceIsStringFlag: true},
        disabledSubmitBtn: true,
      });
    } else {
      this.setState({
        ...this.state,
        validation: {errorBalanceIsStringFlag: false},
        disabledSubmitBtn: false,
      });
    }
  };

  getErrorMessage = (lengthFlag, numberFlag) => {
    if (lengthFlag) {
      return 'Введите не менее 3-х букв';
    }
    if (numberFlag) {
      return 'Введите строку';
    } else {
      return '';
    }
  };


// =================== Function for Validation end========================


  setNameProduct = (value) => {
    this.setState({...this.state, nameProduct: value});
  };
  setCategoryProduct = (value) => {
    this.setState({...this.state, categoryProduct: value});
  };

  setPriceProduct = (value) => {
    this.setState({...this.state, priceProduct: value});
  };

  setBalanceProduct = (value) => {
    this.setState({...this.state, stockBalanceProduct: value});
  };

  resetForm = () => {
    this.setState({
      nameProduct: '',
      categoryProduct: '',
      priceProduct: '',
      stockBalanceProduct: '',
    });
  };

  addProduct = () => {
    const {
      nameProduct,
      categoryProduct,
      priceProduct,
      stockBalanceProduct,
      products,
    } = this.state;

    const addedProduct = {
      id: shortid(),
      name: nameProduct,
      category: categoryProduct,
      price: priceProduct,
      balance: stockBalanceProduct,
    };
    this.setState({
      ...this.state,
      products: [...products, addedProduct],
    });
    this.resetForm();
  };

  deleteProduct = (id) => {
    this.setState({
      products: this.state.products.filter((product) => product.id !== id),
    });
  };

  confirmEditOnProduct = () => {
    this.state.products.map((onProduct) => {
      if (onProduct.id === this.state.productId) {
        onProduct.name = this.state.nameProduct;
        onProduct.category = this.state.categoryProduct;
        onProduct.price = this.state.priceProduct;
        onProduct.balance = this.state.stockBalanceProduct;
      }
      return onProduct;
    });
    this.setState({addProductFlag: !this.state.addProductFlag});
  };
  editProduct = (id) => {
    this.setState({
      addProductFlag: !this.state.addProductFlag,
      editOnProductFlag: !this.state.editOnProductFlag,
      products: this.state.products.map((product) => {
        if (product.id === id) {
          this.setState({
            nameProduct: product.name,
            categoryProduct: product.category,
            priceProduct: product.price,
            stockBalanceProduct: product.balance,
            productId: id,
          });
        }
        return product;
      }),
    });
  };

  showEditForm = () => {
    this.setState({addProductFlag: true});
  };

  closePopup = () => {
    this.setState({
      addProductFlag: !this.state.addProductFlag,
    });
  };

  render() {
    return (
      <>
        <Header />
        <div className="App">
          <ProductTable
            productsArray={this.state.products}
            deleteProduct={this.deleteProduct}
            editProduct={this.editProduct}
            showEditForm={this.showEditForm}
          />
          {this.state.addProductFlag ? (
            <Form
              setName={this.setNameProduct}
              setCategory={this.setCategoryProduct}
              setPrice={this.setPriceProduct}
              setBalance={this.setBalanceProduct}
              addProduct={this.addProduct}
              formState={this.state}
              closePopup={this.closePopup}
              confirmEditOnProduct={this.confirmEditOnProduct}
              editOnProductFlag={this.state.editOnProductFlag}
              onBlurName={this.onBlurName}
              onBlurCategory={this.onBlurCategory}
              getErrorMessage={this.getErrorMessage}
              validation={this.state.validation}
              onBlurPrice={this.onBlurPrice}
              onBlurBalance={this.onBlurBalance}
            />
          ) : null}

          {this.state.products.length === 0 ? (
            <div className="off-product">Товары отсутствуют</div>
          ) : null}
        </div>
      </>
    );
  }
}
