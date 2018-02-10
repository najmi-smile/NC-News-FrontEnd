import React from 'react';
import Moment from 'moment';
import VoteComment from './VoteComment';
// import DeleteComment from './DeleteComment';
import PT from "prop-types";
import PostComment from './PostComment';
import {fetchComments} from '../httpRequests';

class Comments extends React.Component {
	state = {
		comments: null,
		articleId: null,
		users : null
	}
	componentDidMount(){
		const {articleId , users} = this.props;
		this.setState({
			articleId: articleId,
			users: users
		});
		this.commentsFetch(articleId);
	}
	commentsFetch(articleId){
		fetchComments(`/articles/${articleId}/comments`)
      .then(res => {
        this.setState({
          comments:res.list_of_comments
				})
      })
      .catch(console.log)
	}
	
	render() {
		const {articleId} = this.state;
		return (
			<div>
				<div className='commentInput'>  
          <PostComment />          
        </div>
				< article className="media" >
					<figure className="media-left">
						<p className="image is-64x64">
							<img src={require('../images/avatar.png')} alt="user" />
						</p>
					</figure>
					<div className="media-content" style={{ overflow: 'hidden' }}>
						<div className="content">
							<p>
								<strong>Commentor Name</strong><small>Date</small>
								<br/>
								comment body.....
							</p>
							{articleId && 
								<VoteComment 
									articleId={articleId}  
									commentId={'commentId'}
								/> }
						</div>
					</div>
					{/* {this.props.comment.user.id === this.props.authUser.uid ? <DeleteComment deleteUserComment={this.props.deleteUserComment} index={this.props.index} /> : null} */}
					<div className="media-right">
						<button className="delete"></button>
					</div>
				</article >
			</div>
		)
	}	//	render()
}	//	class Comments

Comments.propTypes = {
	articleId: PT.string.isRequired,
  users: PT.array.isRequired
};


export default Comments;