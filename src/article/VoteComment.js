import React from 'react';
import PT from "prop-types";
import {fetchComments} from '../httpRequests';
class VoteComment extends React.Component {
  state = {
    comment: null,
    articleId: null,
    voteInc : 'false'
  }
  //  TODO  need sorting why class is not been changed
  componentDidMount(){
    const {	comment, articleId } = this.props;
    this.setState({
      comment : comment,
      articleId: articleId
    })
  }
  fetchComment = () => {
    const { articleId,comment } = this.state;
    const url = `/articles/${articleId}/${comment._id}`;
    fetchComments(url)
    .then(res => {
      var val;
      this.state.voteInc === 'false' 
        ? val = 'true'
        : val = 'false';
      this.setState({
        comment : res,
        voteInc: val
      })
    })
    .catch(console.log);
  }
  voteComment = (vote) => {

    const { comment, articleId } = this.state;
    const url = `/articles/${articleId}/${comment._id}?vote=${vote}`;
    fetchComments(url,'PUT')
      .then((res) => {
        this.fetchComment();
      })
      .catch(console.log);
	} //  voteComment()
  render() {
    const { comment, voteInc } = this.state;
    const node1 =  <p className="button is-danger" id="voteUpButton" 
            onClick={() => this.voteComment('up')}>
            <span><i className="fas fa-thumbs-up"></i></span>
            <span className='section' id="voteCount">{comment && comment.votes}</span>
          </p>
    const node2 =  <p className="button is-info" id="voteUpButton" 
            onClick={() => this.voteComment('down')}>
            <span><i className="fas fa-thumbs-down"></i></span>
            <span className='section' id="voteCount">{comment && comment.votes}</span>
          </p>
    let node;
    if(voteInc === 'false'){
      node = node1;
    } else {
      node = node2;
    }

    return (
      <div>
       {node}
      </div>
    )
  }

}

VoteComment.propTypes = {
  comment: PT.object.isRequired,
  articleId: PT.string.isRequired
};


export default VoteComment;