import React from 'react';
import {Table} from 'semantic-ui-react';
import {ProductRow} from './productRow';

export function ProductsTable (props) {
  const {deleteProduct, products, getUpdatedProduct} = props;
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell textAlign ='center'>Product name</Table.HeaderCell>
          <Table.HeaderCell textAlign ='center'>Product category</Table.HeaderCell>
          <Table.HeaderCell textAlign ='center'>Product price</Table.HeaderCell>
          <Table.HeaderCell textAlign ='center'>Product quantity</Table.HeaderCell>
          <Table.HeaderCell textAlign ='center'>Actions</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <ProductRow
          products={products}
          deleteProduct={deleteProduct}
          getUpdatedProduct={getUpdatedProduct}
        />
      </Table.Body>
    </Table>
  );
}
