import React from 'react';
import moment from 'moment';
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
	voteComment(commentId){
		console.log('**** voteComment is called',commentId);
    const url = `/articles/${this.state.articleId}/${commentId}?vote=${'up'}`;
    fetchComments(url,'PUT')
      .then(res => {
        this.commentsFetch(this.state.articleId);
      })
      .catch(console.log);
  } //  voteComment()
	render() {
		const { articleId,comments,users } = this.state;
		var commentsNode;
    if(comments){
      commentsNode = comments.map((comment,i) => {
        let imgLink,username,name;
        users.forEach(user => {
          if (comment.created_by === user.username) {
            imgLink = user.avatar_url;
            username = user.username;
            name = user.name;
          }
        });
      
        return (
					< article key={i} className="media" >
					<figure className="media-left">
						<p className="image is-64x64">
							<img src={ imgLink } alt="user" />
						</p>
					</figure>
					
						<div className="media-content" style={{ overflow: 'hidden' }}>
							<div className="content">
								<p>
									<strong>{name || username }</strong><small>{ ` ${moment(comment.created_at).format("MMM Do YY")}`}</small>
									<br/>
									<small>{comment.body}</small>
								</p>
								
								<VoteComment 
									comment={comment}
									articleId={articleId}
								/>
							</div> 												
						</div>
					

					{/* {this.props.comment.user.id === this.props.authUser.uid ? <DeleteComment deleteUserComment={this.props.deleteUserComment} index={this.props.index} /> : null} */}
					<div className="media-right">
						<button className="delete"></button>
					</div>
				</article >
        )
      }); //  Map Finished   
    } //  if comments
		return (
			<div>
				<div className='commentInput'>  
          <PostComment />          
        </div>
				{	commentsNode }
			</div>
		)
	}	//	render()
}	//	class Comments

Comments.propTypes = {
	articleId: PT.string.isRequired,
  users: PT.array.isRequired
};


export default Comments;