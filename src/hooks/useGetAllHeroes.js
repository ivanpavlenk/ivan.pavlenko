import {useEffect, useState} from 'react';
import axios from 'axios';

export default function useGetAllPlanets () {
  const [heroes, setHeroes] = useState ([]);
  const [isLoading, setIsLoading] = useState (true);
  const [errorMessage, setErrorMessage] = useState (null);
  
  useEffect (() => {
    axios
      .get ('http://swapi.dev/api/people/')
      .then (res => {
        const allHeroes = res.data.results;
        setHeroes (allHeroes);
        setIsLoading (false);
      })
      .catch (err => {
        setIsLoading (false);
        setErrorMessage (err.response);
      });
  }, []);
  return [heroes,isLoading,errorMessage];
}
