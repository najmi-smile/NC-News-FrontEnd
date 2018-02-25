import React from 'react';
import moment from 'moment';
import PT from "prop-types";
import PostComment from './PostComment';
import VoteComment from './VoteComment';
import {fetchComments} from '../httpRequests';
import { Link } from 'react-router-dom';
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
		articleId  =  articleId || this.state.articleId;
		fetchComments(`/articles/${articleId}/comments`)
      .then(res => {
        this.setState({
          comments:res.list_of_comments
				})
      })
      .catch(console.log)
	}

	deleteComment(commentId) {
		fetchComments(`/articles/${this.state.articleId}/${commentId}`, 'DELETE')
			.then(res =>{
				this.commentsFetch(this.state.articleId);
			})
			.catch(console.log);
	}
	render() {
		const { articleId,comments,users } = this.state;
		var commentsNode;
    if(comments){
			commentsNode = comments
			.sort((a,b) => {
				return b.created_at > a.created_at;
			})
			.map((comment,i) => {
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
							{<Link to={`/users/${username}`}>{<img src={ imgLink } alt="user" />}</Link>}
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
						{username === 'northcoder' ?
							<div className="media-right">
								<button className="delete"
								onClick = {()=> this.deleteComment(comment._id)}
								/>
							</div>
							: null
						}
				</article >
        )
      }); //  Map Finished   
		} //  if comments
		
		return (

			<div className="column">
				<div className='commentInput'> 
					{articleId && 
						<PostComment  
							username={ 'northcoder' }
							articleId={ articleId }
							commentsFetch = { this.commentsFetch.bind(this) }
						/> 
					}         
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