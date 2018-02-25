import React from 'react';
import PT from "prop-types";
import { postComment } from '../httpRequests/index';
class PostComment extends React.Component {
  state = {
    comment: '',
  };

  render() {
    const {comment} = this.state;
    return (
      <div className="post-comments">
        <form className='field is-grouped' onSubmit={(e) => comment && this.postComment(e)}>
          <div className='control is-expanded'>
            <textarea id="commentInputField" 
              maxLength="300" 
              className='input' 
              value={comment} 
              onChange={this.changeHandler} 
              placeholder='write a comment...' 
              onKeyPress={this.handleKeyPress} 
            />
          </div>
          <button className='control button is-pulled-right is-danger' type='submit'>Post comment</button>
        </form>
      </div>
    )
  }

  changeHandler = (event) => {
    if (event) event.preventDefault();
    let { comment } = this.state;
    if (comment.length <= 300) {
      this.setState({
        comment: event.target.value,
      });
    }
  }

  handleKeyPress = (target) => {
    if (target.charCode === 13 && !target.shiftKey) {
      target.preventDefault()
      this.state.comment && this.postComment()
    }
  }

  postComment = (e) => {
    if (e) e.preventDefault();
    const {comment} = this.state;
    this.setState({comment : ''});
    const { commentsFetch,username, articleId } = this.props;    
    const obj = {
      body: comment,
      created_by: username,
      creationDate: new Date(Date.now()).toISOString(),
      votes: 0
    }
    postComment(`/articles/${articleId}/addcomment`,obj)
      .then(res => {
        commentsFetch(articleId);
      })
      .catch(console.log);
  }
}

PostComment.propTypes = {
  commentsFetch: PT.func.isRequired,
  username: PT.string.isRequired,
  articleId: PT.string.isRequired
};

export default PostComment;