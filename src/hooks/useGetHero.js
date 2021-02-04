import {useEffect, useState} from 'react';
import axios from 'axios';

export default function useGetHero(heroId,initialsValue) {
    const [hero, setHero] = useState (initialsValue);
    const [isLoading,setIsLoading] = useState(true)
    const [errorMessage,setErrorMessage] = useState(null)
    useEffect (() => {
      axios.get (`https://swapi.dev/api/people/${heroId}/`).then (res => {
        const hero = res.data;
        setHero (hero);
        setIsLoading(false)
      })
      .catch(err=> {
        setErrorMessage (err.response)
      })
      
    }, [heroId]);
    return [hero,isLoading,errorMessage];
  };