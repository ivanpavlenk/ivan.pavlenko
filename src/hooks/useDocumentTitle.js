import {useEffect,useState} from 'react';

export default function useDocumentTitle (defaultTitle){

  const [title, setTitle] = useState (defaultTitle)

  const handleChangeTitle = (e)=> {
    setTitle(e.target.value)
  }

  useEffect (
    () => {
      document.title = title;
    },
    [title]
  );
  return {title,handleChangeTitle}
};
