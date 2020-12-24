import React, {Component} from 'react';
import {Message} from 'semantic-ui-react';
import {Loader} from 'semantic-ui-react';

export default class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      isLoading: false,
    };
  }
  componentDidMount() {
    const {postId} = this.props;
    this.fetchComments(postId);
  }

  fetchComments(postId) {
    this.setState({isLoading: true});
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => response.json())
      .then((comments) => {
        this.setState({
          comments,
        });
      })
      .then(this.setState({isLoading: false}));
  }
  render() {
    const {comments, isLoading} = this.state;
    return (
      <div>
        <Loader active={isLoading} inline="centered" />
        {comments.map((comment) => {
          return <Message key={comment.id}>{comment.body}</Message>;
        })}
      </div>
    );
  }
}
