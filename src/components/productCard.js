import React from 'react';
import {Grid, Card, Image, Button} from 'semantic-ui-react';
import {useDispatch} from 'react-redux';
import { addProductInCard } from '../Redux/actions/cart';
export default function ProductCard ({product}) {
  const dispatch = useDispatch ();

  return (
    <Grid.Column>
      <Card>
        <Image src={product.img} />
        <Card.Content>
          <Card.Header>{product.title}</Card.Header>
          <Card.Description>
            Price : {product.price}$
          </Card.Description>
        </Card.Content>
        <Card.Content>
          <Button
            primary
            onClick={() => dispatch (addProductInCard (product.id))}
          >
            Add Cart
          </Button>
        </Card.Content>
      </Card>
    </Grid.Column>
  );
}
