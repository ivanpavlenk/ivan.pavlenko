import React from 'react';
import {Icon} from 'semantic-ui-react';
import {useSelector} from 'react-redux';
import {totalCartItem} from '../selectors/selectors';

export default function MenuCart () {
  const totalItem = useSelector (totalCartItem);

  return (
    <div className="cart-inner">
      <div className="cart-block">
        <Icon name="shopping cart" />
        <div className="cart-count">{totalItem}</div>
      </div>
    </div>
  );
}
