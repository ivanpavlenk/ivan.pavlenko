import React from 'react';
import { useSelector } from "react-redux";
import { Container, Card } from "semantic-ui-react";
import ProductItem from "../components/ProductItem";
import { getProducts, getProductsLoading } from "../redux/selectors/products";
import DimmerLoader from "../../../home-works/hw4/blog-v2/components/DimmerLoader";

function Products() {
  const products = useSelector(getProducts);
  const isLoading = useSelector(getProductsLoading);
  return (
    <Container>
      <DimmerLoader active={isLoading} />
      <Card.Group>
        {products.map(product => <ProductItem key={product.id} product={product}/>)}
      </Card.Group>
    </Container>
  );
}

export default Products;
