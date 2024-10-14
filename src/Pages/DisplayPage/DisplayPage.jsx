import React, { Component } from 'react';
import './DisplayPage.css'; 
import BackButton from '../../Components/BackButton/BackButton';

class DisplayPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null,
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    const { id, posts } = this.props; 
    this.fetchPost(id, posts); 
  }

  componentDidUpdate(prevProps) {
    const { id, posts } = this.props;
    
  
    if (id !== prevProps.id) {
      this.setState({ loading: true, error: null }); 
      this.fetchPost(id, posts); 
    }
  }

  fetchPost(id, posts) {
    const post = posts.find(p => p.id === parseInt(id)); 

    if (post) {
      this.setState({ post, loading: false });
    } else {
      this.setState({ error: 'Post not found', loading: false });
    }
  }

  render() {
    const { post, loading, error } = this.state;

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (!post) return <div>Post not found!</div>;

    return (
      <div className="card">
        <div className='back-button'>
        <BackButton></BackButton>
        </div>
        <h2 className="card-title">{post.title}</h2>
        <p className="card-author">{post.author} - {post.date}</p>
        <div className="card-content">
          <p>{post.content}</p>
        </div>
      </div>
    );
  }
}

export default DisplayPage;
