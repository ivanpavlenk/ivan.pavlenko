import React, {Component} from 'react';
import PostItem from './PostItem';
import LoadingOverlay from './LoadingOverlay';

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      posts: [],
      comments: [],
    };
  }

  componentDidMount() {
    this.fetchUsers();
    this.fetchComments();
  }

  fetchUsers() {
    this.setState({loading: true});
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((posts) => {
        this.setState({
          loading: false,
          posts,
        });
      })
      .catch((e) => {
        this.setState({
          loading: false,
        });
        alert(e.message);
      });
  }

  fetchComments() {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.json())
      .then((comments) => {
        this.setState({
          comments,
        });
      })
      .catch((e) => {
        alert(e.message);
      });
  }

  render() {
    const {loading, posts, comments} = this.state;
    const {onPostClick} = this.props;
    return (
      <div className="post-list-wrapper">
        <LoadingOverlay active={loading} />
        {posts.map((post) => (
          <PostItem
            onClick={() => onPostClick(post)}
            post={post}
            key={post.id}
            comments={comments}
          />
        ))}
      </div>
    );
  }
}

export default PostList;
