import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import {Container} from 'semantic-ui-react';
import {ProductsForm} from './Components/ProductsForm';
import shortid from 'shortid';
import {ProductsTable} from './Components/productsTable';

export default class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      products: [],
      isEditMode: false,
      updatedProduct: null,
    };
  }

  addProduct = (
    event,
    productName,
    productCategory,
    productPrice,
    productQuantity
  ) => {
    event.preventDefault ();
    const {products} = this.state;
    const newProduct = {
      id: shortid (),
      productName,
      productCategory,
      productPrice,
      productQuantity,
    };
    this.setState ({
      ...this.state,
      products: [...products, newProduct],
    });
  };

  deleteProduct = id => {
    const {products} = this.state;
    this.setState ({products: products.filter (product => product.id !== id)});
  };

  getUpdatedProduct = product => {
    this.setState ({
      ...this.state,
      updatedProduct: product,
      isEditMode: true,
    });
  };

  editProduct = updatedProduct => {
    const {products} = this.state;
    this.setState ({
      products: products.map (
        product => (product.id === updatedProduct.id ? updatedProduct : product)
      ),
      isEditMode: false,
    });
  };
  render () {
    return (
      <Container>
        <ProductsTable
          products={this.state.products}
          deleteProduct={this.deleteProduct}
          getUpdatedProduct={this.getUpdatedProduct}
        />
        <ProductsForm
          addProduct={this.addProduct}
          editProduct={this.editProduct}
          editMode={this.state.isEditMode}
          updatedProduct={this.state.updatedProduct}
        />
      </Container>
    );
  }
}
