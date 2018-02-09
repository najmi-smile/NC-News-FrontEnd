import React from 'react';
import Moment from 'moment';
import VoteComment from './VoteComment';
// import DeleteComment from './DeleteComment';
import PT from "prop-types";

class Comments extends React.Component {
	render() {
		return (
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
						<VoteComment />
					</div>
				</div>
				{/* {this.props.comment.user.id === this.props.authUser.uid ? <DeleteComment deleteUserComment={this.props.deleteUserComment} index={this.props.index} /> : null} */}
				<div className="media-right">
					<button className="delete"></button>
				</div>
			</article >
		)
	}	//	render()
}	//	class Comments

// Comments.propTypes = {
//     deleteUserComment: PT.func,
//     key: PT.number,
//     index: PT.number,
//     ownComment: PT.bool,
//     comment: PT.object,
//     authUser: PT.object
// };


export default Comments;