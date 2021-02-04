import {useEffect, useState} from 'react';
import axios from 'axios';

export default function useGetCharacterFilms () {
  const [films, setFilms] = useState ([]);
  const [isFetchingFIlms, setIsFetchingFilms] = useState (true);
  const [errorMessage, setErrorMessage] = useState (null);
  useEffect (() => {
    axios
      .get ('http://swapi.dev/api/films/')
      .then (res => {
        const allFilms = res.data.results;
        setFilms (allFilms);
        setIsFetchingFilms (false);
      })
      .catch (err => {
        setErrorMessage (err.response);
      });
  }, []);
  return [films,isFetchingFIlms,errorMessage];
}
