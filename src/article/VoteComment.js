import React from 'react';
import PT from "prop-types";

class VoteComment extends React.Component {
  state = {
    voteInc: false,
  }; 
  render() {
    // const {id, votes} = this.props.comment.comment;
    return (
      <div>
        <p className={`button is-danger`} id="voteUpButton" onClick={() => {
          this.incrementVote()}}>
          <span><i className="fas fa-thumbs-up"></i></span>
          <span className='section' id="voteCount">{2}</span>
        </p>
      </div>
    )
  }
  incrementVote = (id) => { 
//     this.state.voteInc 
//     ? this.setState({voteInc: false})
//     : this.setState({voteInc: true});     
//     CommentRef.voteComment(id,this.props.authUser);
  };
}

// CommentVoter.propTypes = {
//   comment: PT.object.isRequired,
//   authUser: PT.object.isRequired
// };

export default VoteComment;