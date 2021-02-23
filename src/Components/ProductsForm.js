import React, {Component} from 'react';
import {Button, Form} from 'semantic-ui-react';

export class ProductsForm extends Component {
  constructor (props) {
    super (props);
    this.state = {
      productName: '',
      productCategory: '',
      productPrice: null,
      productQuantity: null,
    };
  }

  setNameProduct = event => {
    this.setState ({...this.state, productName: event.target.value});
  };
  setCategoryProduct = event => {
    this.setState ({...this.state, productCategory: event.target.value});
  };
  setPriceProduct = event => {
    this.setState ({...this.state, productPrice: event.target.value});
  };
  setQuantityProduct = event => {
    this.setState ({...this.state, productQuantity: event.target.value});
  };

  clearForm = () => {
    this.setState ({
      productName: '',
      productCategory: '',
      productPrice: '',
      productQuantity: '',
    });
  };
  handlerAddProduct = (e) => {
    const {addProduct} = this.props;
    const {
      productName,
      productCategory,
      productPrice,
      productQuantity,
    } = this.state;
    addProduct (e, productName, productCategory, productPrice, productQuantity);
    this.clearForm ();
  };

  render () {
    const {
      productName,
      productCategory,
      productPrice,
      productQuantity,
      isEditMode,
    } = this.state;
    return (
      <div>
        <Form>
          <Form.Field>
            <label>Product name</label>
            <input
              placeholder="Product name"
              value={productName}
              onChange={event => this.setNameProduct (event)}
            />
          </Form.Field>
          <Form.Field>
            <label>Product category</label>
            <input
              placeholder="Product category"
              value={productCategory}
              onChange={event => this.setCategoryProduct (event)}
            />
          </Form.Field>
          <Form.Field>
            <label>Product price</label>
            <input
              placeholder="Product price"
              value={productPrice}
              onChange={event => this.setPriceProduct (event)}
            />
          </Form.Field>
          <Form.Field>
            <label>Product quantity</label>
            <input
              placeholder="Product quantity"
              value={productQuantity}
              onChange={event => this.setQuantityProduct (event)}
            />
          </Form.Field>
          <Button type="submit" onClick={(e) => this.handlerAddProduct (e)}>
            {isEditMode ? 'edit product' : 'add product'}
          </Button>
        </Form>
      </div>
    );
  }
}
