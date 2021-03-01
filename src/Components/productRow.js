import React, {Fragment} from 'react';
import {Table, Button} from 'semantic-ui-react';

export function ProductRow (props) {
  const {deleteProduct, products, getUpdatedProduct} = props;
  return (
    <Fragment>
      {products.map (product => {
        return (
          <Table.Row>
            <Table.Cell>
              {product.productName}
            </Table.Cell>
            <Table.Cell>
              {product.productCategory}
            </Table.Cell>
            <Table.Cell>
              {product.productPrice}
            </Table.Cell>
            <Table.Cell>
              {product.productQuantity}
            </Table.Cell>
            <Table.Cell
              style={{display: 'flex', justifyContent: 'space-around'}}
            >
              <Button primary onClick={() => deleteProduct (product.id)}>
                delete product
              </Button>
              <Button secondary onClick={() => getUpdatedProduct(product)}>
                Update product
              </Button>
            </Table.Cell>
          </Table.Row>
        );
      })}
    </Fragment>
  );
}
