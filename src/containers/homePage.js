import React from 'react';
import {Button, Container, Header, Icon} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

export default function HomePage () {
  const styles = {
    centerButton: {
      display: 'block',
      marginLeft: "auto",
      marginRight: "auto"
    }
  }
  return (
    <div>
      <Container>
        <Header
          as="h1"
          content="Welcome to Gist Explorer"
          inverted
          style={{
            fontSize: '4em',
            fontWeight: 'normal',
            marginBottom: 40,
            marginTop: '3em',
            textAlign: 'center',
          }}
        />
        <Link to="/files">
          <Button primary size="huge" style = {styles.centerButton}>
            Go to GIST
            <Icon name="right arrow" />
          </Button>
        </Link>
      </Container>
    </div>
  );
}
