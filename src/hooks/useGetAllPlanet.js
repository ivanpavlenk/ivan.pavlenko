import {useEffect, useState} from 'react';
import axios from 'axios';

export default function useGetAllPlanets() {
    const [planets, setPlanets] = useState ([]);
    const [isLoading, setIsLoading] = useState (true);
    const [errorMessage, setErrorMessage] = useState (null);
    useEffect (() => {
      axios.get ('https://swapi.dev/api/planets/').then (res => {
        const allPlanet = res.data.results;
        setPlanets (allPlanet);
        setIsLoading (false);
      })
      .catch (err => {
        setIsLoading (false);
        setErrorMessage (err.response);
      });
    }, []);
    return [planets,isLoading,errorMessage]
  };