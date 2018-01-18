import React from 'react';
import GetComments from '../httpRequests/FetchData';

class CommentsPage extends React.Component {
  state = {
    comments : []
  }
  componentDidMount() {
    GetComments('comments')
      .then(res=>{
        this.setState({
          comments : res
        })
      })
      .catch(console.log);

  }
  render () {
    const {comments} = this.state;
    let commentNode;
    if(comments.length > 0){
      commentNode = this.state.comments.map(comment => {
        return (
          <ul key = {comment._id}>
            <li>{ comment.created_by }</li>
            <li>{ comment.votes }</li>
            <li>{ comment.body }</li>
            <li>{ comment.created_at }</li>
          </ul>
        )
      })
    }
    return (
      <div>
        {comments.length && commentNode}
      </div>
    )
  }
}

export default CommentsPage;