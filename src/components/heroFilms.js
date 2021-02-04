import React from 'react';
import {Card, Loader} from 'semantic-ui-react';
import {useParams} from 'react-router-dom';
import useGetCharacterFilms from '../hooks/useGetCharacterFilms';

export default function HeroAllFilms () {
  const {filmId} = useParams ();
  const [films,isLoading] = useGetCharacterFilms ();
  const charactersFilms = films.filter (film =>
    film.episode_id === Number(filmId)
  );
  return (
    <Card.Group>
      <Loader active ={isLoading}/>
      {charactersFilms.map (film => {
        return (
          <Card>
            <Card.Content>
              <Card.Header>{film.title}</Card.Header>
              <Card.Description>
                {film.opening_crawl}
              </Card.Description>
              <Card.Meta>Director:{film.director}</Card.Meta>
            </Card.Content>
          </Card>
        );
      })}
    </Card.Group>
  );
}
