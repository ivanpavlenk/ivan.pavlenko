import React from 'react';
import {useParams, Link, Route, Switch, useRouteMatch} from 'react-router-dom';
import useGetHero from '../hooks/useGetHero';
import useGetCharacterFilms from '../hooks/useGetCharacterFilms';
import {
  Container,
  Grid,
  GridColumn,
  Card,
  Image,
  Header,
  Loader,
} from 'semantic-ui-react';
import HeroAllFilms from './heroFilms';

export default function HeroPage () {
  const {path, url} = useRouteMatch ();
  const {heroId} = useParams ();
  const [hero, isLoading] = useGetHero (heroId, {});
  const [films, isFetchingFilms] = useGetCharacterFilms ();

  const HeroFilms = films.filter (film =>
    film.characters.includes (`http://swapi.dev/api/people/${heroId}/`)
  );

  return (
    <Container>
      <Grid>
        <GridColumn width={6}>
          {isLoading
            ? <Loader active={isLoading} />
            : <Card>
                <Image
                  src={`https://starwars-visualguide.com/assets/img/characters/${heroId}.jpg`}
                />
                <Card.Content>
                  <Card.Header>{hero.name}</Card.Header>
                  <Card.Description>
                    <span className="description">Heigth : </span>
                    {hero.height}
                  </Card.Description>
                  <Card.Description>
                    <span className="description">Mass : </span> {hero.mass}
                  </Card.Description>
                  <Card.Description>
                    <span className="description">Hair_color : </span>
                    {' '}
                    {hero.hair_color}
                  </Card.Description>
                  <Card.Description>
                    <span className="description">Eye_color : </span>
                    {hero.eye_color}
                  </Card.Description>
                  <Card.Description>
                    <span className="description">Birth_year : </span>
                    {hero.birth_year}
                  </Card.Description>
                  <Card.Description>
                    <span className="description">Gender : </span>
                    {hero.gender}
                  </Card.Description>
                  <Header>FIlms</Header>
                  <Loader active={isFetchingFilms} inline />
                  {HeroFilms.map (film => {
                    return (
                      <Card.Description>
                        <Link to={`${url}/herofilms${film.episode_id}`}>
                          {film.title}
                        </Link>
                      </Card.Description>
                    );
                  })}
                </Card.Content>
              </Card>}

        </GridColumn>
        <GridColumn width={6}>
          <Switch>
            <Route exact path={path}>
              <Card>
                <Card.Content>
                  <Card.Header>Select Hero Film</Card.Header>
                </Card.Content>
              </Card>
            </Route>
            <Route path={`${path}/herofilms:filmId`}>
              <HeroAllFilms />
            </Route>
          </Switch>
        </GridColumn>
      </Grid>
    </Container>
  );
}
