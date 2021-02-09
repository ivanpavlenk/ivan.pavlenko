import React from 'react';
import {Button} from 'semantic-ui-react';
import {useDispatch} from 'react-redux';
import {removeProductCart, increaseCounterProduct} from '../Redux/actions/cart';

export default function CartItem({product}) {
  const dispatch = useDispatch ();
  return (
    <div className="product">
      <div className="cart-product-img-inner">
        <img className="cart-product-img" src={product.img} alt="img" />
      </div>
      <div className="cart-product-count">
        <p className="product-count-value">Count:{product.count}</p>
      </div>
      <div className="cart-product-id">
        <p className="product-id-value">ID :{product.id}</p>
      </div>
      <div className="btn-inner">
        <Button
          primary
          id={product.id}
          onClick={() => dispatch (removeProductCart (product.id))}
        >
          Delete Product
        </Button>
      </div>
      <div className="btn-inner">
        <Button
          primary
          id={product.id}
          onClick={() => dispatch (increaseCounterProduct (product.id))}
        >
          ADD +
        </Button>
      </div>
      <p>{product.price}$</p>
    </div>
  );
}
