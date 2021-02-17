import {Dimmer, Loader} from 'semantic-ui-react';
import {useParams} from 'react-router';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {docco} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import useGetFileContent from '../hooks/useGetFileContent';

export default function FileContent({filesArray}) {
  const {fileId} = useParams ();
  const {fileUrl, language} = filesArray.find (file => file.fileId === fileId);
  const [files, isLoading] = useGetFileContent (fileUrl);
  console.log (language);

  return (
    <div className="code-views">
      <Dimmer active={isLoading}>
        <Loader />
      </Dimmer>
      <SyntaxHighlighter
        language={language && language.toLowerCase ()}
        style={docco}
      >
        {files}
      </SyntaxHighlighter>
    </div>
  );
}
