import {useEffect, useState} from 'react';
import axios from 'axios';

export default function useGetAllPlanets (url) {
  const [files, setFiles] = useState ('');
  const [isloading, setIsLoading] = useState (null);

  useEffect (
    () => {
      axios (url)
      .then(setIsLoading(true))
      .then (response => {
        if (typeof response.data === 'object') {
          setFiles (JSON.stringify (response.data));
          setIsLoading (false);
        } else {
          setFiles (response.data);
          setIsLoading (false);
        }
      });
    },
    [url]
  );
  return [files, isloading];
}
