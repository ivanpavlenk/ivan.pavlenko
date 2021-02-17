import React from 'react';
import {List} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function ListItem({file,url}) {
  return (
    <List.Item>
      <List.Content>
        <List.Header className="list-header"><Link to = {`${url}/file${file.fileId}`}>{file.fileName}</Link></List.Header>
      </List.Content>
    </List.Item>
  );
}
