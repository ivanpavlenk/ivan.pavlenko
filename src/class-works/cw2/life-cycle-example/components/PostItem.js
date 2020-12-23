import React, {Component} from 'react';
import {Feed} from 'semantic-ui-react';
import {Button, Message} from 'semantic-ui-react';

class PostItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentOpen: false,
      comments: [],
      buttonLoader: false,
    };
  }

  hideComment = () => {
    this.setState({comments: [], commentOpen: false});
  };

  componentDidMount() {
    const {buttonLoader} = this.state;
    if (buttonLoader) {
      this.fetchComments();
    }
  }

  fetchComments(postId) {
    this.setState({buttonLoader: true});
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => response.json())
      .then((comments) => {
        this.setState({
          buttonLoader: false,
          comments,
          commentOpen: true,
        });
      });
  }

  render() {
    const {post, onClick} = this.props;
    const {commentOpen, buttonLoader, comments} = this.state;
    return (
      <Feed>
        <Feed.Event>
          <Feed.Label>
            <img
              src="https://react.semantic-ui.com/images/avatar/small/justen.jpg"
              alt=""
            />
          </Feed.Label>
          <Feed.Content>
            <Feed.Summary onClick={onClick}>
              <Feed.User>{post.title}</Feed.User>
            </Feed.Summary>
            <Feed.Extra text>{post.body}</Feed.Extra>
            <Button
              className="comments-btn"
              size="small"
              onClick={
                commentOpen
                  ? this.hideComment
                  : () => this.fetchComments(post.id)
              }
              loading={buttonLoader}
              primary
            >
              {commentOpen ? 'Hide comment' : 'Show comment'}
            </Button>
            {comments.map((comment) => {
              return <Message key={comment.id}>{comment.body}</Message>;
            })}
          </Feed.Content>
        </Feed.Event>
      </Feed>
    );
  }
}

export default PostItem;
