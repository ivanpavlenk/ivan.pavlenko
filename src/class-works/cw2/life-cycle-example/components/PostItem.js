import React, {Component} from 'react';
import {Feed} from 'semantic-ui-react';
import {Button} from 'semantic-ui-react';
import Comments from './Comments'

class PostItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCommentOpen: false,
    };
  }

  toggleShowComment = () => {
    this.setState({isCommentOpen: !this.state.isCommentOpen});
  };

  render() {
    const {post, onClick} = this.props;
    const {isCommentOpen} = this.state;
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
              onClick={this.toggleShowComment}
              primary
            >
              {isCommentOpen ? 'Hide comment' : 'Show comment'}
            </Button>
            {isCommentOpen && <Comments postId={post.id}/> }
          </Feed.Content>
        </Feed.Event>
      </Feed>
    );
  }
}

export default PostItem;
