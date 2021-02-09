import React from 'react';
import {Container, Grid} from 'semantic-ui-react';
import {useSelector} from 'react-redux';
import ProductCard from '../components/productCard'

export default function Products () {
  const products = useSelector (state => state.products);

  return (
    <Container>
      <Grid columns={3}>
          {products.map(product => {
            return (
              <ProductCard product = {product}/>
            )
          })}
      </Grid>
    </Container>
  );
}
