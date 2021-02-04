import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {Container, Grid, GridColumn, Card, Image,Loader} from 'semantic-ui-react';
import useGetAllPlanets from '../hooks/useGetAllPlanet';

export default function Planets () {
  const [planets,isLoading] = useGetAllPlanets ();
 
  return (
    <Container>
      <Grid columns={3}>
        <Loader active = {isLoading}/>
        {planets.map ((planet,index) => {
          return (
            <GridColumn>
              <Card>
                <Image
                  src={`https://starwars-visualguide.com/assets/img/planets/${index + 2}.jpg`}
                  wrapped
                  ui={false}
                />
                <Card.Content>
                  <Card.Header>{planet.name}</Card.Header>
                  <Card.Meta>Climate {planet.climate}</Card.Meta>
                  <Card.Description>
                  Population {planet.population}
                  </Card.Description>
                </Card.Content>
              </Card>
            </GridColumn>
          );
        })}
      </Grid>
    </Container>
  );
}
