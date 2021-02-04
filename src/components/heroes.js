import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {Container, Grid, GridColumn, Card, Image,Loader} from 'semantic-ui-react';
import { Link } from "react-router-dom";
import useGetAllHeroes from '../hooks/useGetAllHeroes';

export default function Heroes () {
  const [heroes,isLoading] = useGetAllHeroes ();
  return (
    <Container>
      <Grid columns={3}>
        <Loader active = {isLoading}/>
        {heroes.map ((hero, index) => {
          return (
            <GridColumn>
              <Card>
                <Image
                  src={`https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`}
                  wrapped
                  ui={false}
                />
                <Card.Content>
                  <Link to = {`/heroes${index + 1}`}><Card.Header>Name : {hero.name}</Card.Header></Link>
                  <Card.Meta>Gender : {hero.gender}</Card.Meta>
                  <Card.Description>Birth year : {hero.birth_year}</Card.Description>
                </Card.Content>
              </Card>
            </GridColumn>
          );
        })}
      </Grid>
    </Container>
  );
}
