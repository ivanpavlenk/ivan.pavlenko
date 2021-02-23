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

  editProduct = editedProduct => {
    const {products} = this.state;
    this.setState ({
      products: products.map (
        product => (product.id === editedProduct.id ? editedProduct : product)
      ),
    });
  };
  render () {
    return (
      <Container>
        <ProductsTable
          products={this.state.products}
          deleteProduct={this.deleteProduct}
          editProduct = {this.editProduct} 
        />
        <ProductsForm addProduct={this.addProduct} editMode = {this.isEditMode}/>
      </Container>
    );
  }
}
