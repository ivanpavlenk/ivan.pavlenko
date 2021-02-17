import {createSelector} from 'reselect';

export const getGistFileSelector = createSelector ( state => state.files ,(files) => {
  let {gistFiles} = files
  return gistFiles = gistFiles.map (file => {
    const fileInfo = {...file.files};
    for (let key in fileInfo) {
      return {
        fileName: fileInfo[key].filename,
        fileUrl: fileInfo[key].raw_url,
        fileId: fileInfo[key].filename,
        language: fileInfo[key].language,
      };
    }
    return fileInfo;
  });
});
