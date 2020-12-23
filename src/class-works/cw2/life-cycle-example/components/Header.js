import React from 'react';
import {Header, Segment} from 'semantic-ui-react';

export default function BlogHeader() {
  return (
    <Segment inverted>
      <Header
        as="h2"
        content="Home Work 2"
        textAlign="center"
        inverted
        color="grey"
      />
    </Segment>
  );
}
