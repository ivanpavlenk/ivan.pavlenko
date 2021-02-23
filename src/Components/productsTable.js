import React from 'react';
import {Table, Button} from 'semantic-ui-react';
import {ProductRow} from './productRow';

export function ProductsTable (props) {
  const {deleteProduct, products, editProduct} = props;
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Product name</Table.HeaderCell>
          <Table.HeaderCell>Product category</Table.HeaderCell>
          <Table.HeaderCell>Product price</Table.HeaderCell>
          <Table.HeaderCell>Product quantity</Table.HeaderCell>
          <Table.HeaderCell>Actions<Button primary>Add product</Button></Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <ProductRow
          products={products}
          deleteProduct={deleteProduct}
          editProduct={editProduct}
        />
      </Table.Body>
    </Table>
  );
}
