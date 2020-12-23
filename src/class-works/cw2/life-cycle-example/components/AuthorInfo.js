import React, {Component} from 'react';
import {Card, Icon, Image} from 'semantic-ui-react';
import LoadingOverlay from './LoadingOverlay';

class AuthorInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: null,
      loading: false,
      error: '',
      authorAlbums: [],
    };
  }

  componentDidMount() {
    const {authorId} = this.props;
    if (authorId) {
      this.fetchAlbums(authorId);
      this.fetchAuthor(authorId);
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.authorId !== this.props.authorId && this.props.authorId) {
      this.fetchAuthor(this.props.authorId);
      this.fetchAlbums(this.props.authorId);
    }
  }

  fetchAuthor(authorId) {
    this.setState({loading: true});
    fetch(`https://jsonplaceholder.typicode.com/users/${authorId}`)
      .then((response) => response.json())
      .then((data) => this.setState({author: data, loading: false}))
      .catch((e) =>
        this.setState({error: e.message, loading: false, author: null})
      );
  }

  fetchAlbums(authorId) {
    this.setState({loading: true});
    fetch(`https://jsonplaceholder.typicode.com/users/${authorId}/albums`)
      .then((response) => response.json())
      .then((data) => this.setState({authorAlbums: data, loading: false}))
      .catch((e) =>
        this.setState({error: e.message, loading: false, authorAlbums: null})
      );
  }

  render() {
    const {error, author, loading} = this.state;
    return (
      <div className="author-fixed">
        <div className="error">{error}</div>
        <LoadingOverlay active={loading} />
        {author && (
          <Card>
            <Image
              src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
              wrapped
              ui={false}
            />
            <Card.Content>
              <Card.Header>{author.name}</Card.Header>
              <Card.Meta>
                <span className="date">{author.email}</span>
              </Card.Meta>
              <Card.Description>
                {author.address.city}, {author.address.street}{' '}
                {author.address.zipcode}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div>
                <Icon name="camera" />
                {`${this.state.authorAlbums.length} albums`}
              </div>
            </Card.Content>
          </Card>
        )}
      </div>
    );
  }
}

export default AuthorInfo;
