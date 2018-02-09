import React from 'react';
import PT from "prop-types";


class PostComment extends React.Component {
  state = {
    comment: '',
  };

  render() {
    const {comment} = this.state;
    return (
      <div className="post-comments">
        <form className='field is-grouped' onSubmit={(e) => comment && this.postComment(e)}>
          <section className='control is-expanded'>
          <textarea id="commentInputField" className='input' maxLength="300" onKeyPress={this.handleKeyPress} onChange={this.changeHandler} value={comment} placeholder='write a comment...' />
          </section>
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
    // const comment = {
    //   body: this.state.comment,
    //   eventId: this.props.eventId,
    //   userId: this.props.userId,
    //   creationDate: new Date(Date.now()).toISOString(),
    //   votes: 0,
    //   likedBy : {start: 'start'}
    // }
    // CommentRef.postNewComment(comment, res => { res==='Success' ? this.setState({comment: ''}) : null });
    
  }
}

// PostComments.propTypes = {
//   fetchComments: PT.func,
//   eventId: PT.string,
//   userID: PT.string
// };

export default PostComment;