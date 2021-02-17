
import {pendingFiles, loadingFiles} from '../redux/actions/gistFiles';
export const fetchGistFile = () => {
  return dispatch => {
    dispatch(pendingFiles())
    fetch ('https://api.github.com/gists/public')
      .then (response => response.json ())
      .then (json => dispatch(loadingFiles(json)))
  };
};
