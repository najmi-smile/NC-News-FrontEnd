import React from 'react';
import PT from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Article from '../article/Article';

  export const ArticleNode = (props) => {
    const {filteredArticles,users} = props;
    let articleNode;
    if(filteredArticles) {
      articleNode = filteredArticles.map((article,i) => {
        let imgLink,username,name,userId;
        users.forEach(user => {
          if (article.created_by === user.username) {
            imgLink = user.avatar_url;
            username = user.username;
            name = user.name;
						userId = user._id;
          }
        });
  
        return (
          < article key={i} className="media" >
            <figure className="media-left">
              <p className="image is-64x64">
                {<Link to={`users/${userId}`}>{<img src={ imgLink } alt="user" />}</Link>}
              </p>
            </figure>
            
              <div className="media-content" style={{ overflow: 'hidden' }}>
                <div className="content">
                  <p>
                    <strong>{name || username }</strong><small>{ ` ${moment(article.created_at).format("MMM Do YY")}`}</small>
                    <br/>
                    <Link to={`article/:${article._id}`}><small>{article.title}</small></Link>
                  </p>
                </div> 												
              </div>
            <div className="media-right">
              <button className="delete"
              onClick = {()=> deleteArticle(article._id)}
              />
            </div>
          </article >
        )
      }); //  Map Finished    

    } // if filteredArticles
    return(
      <div>
        {articleNode && articleNode}
      </div>
    )
  }   //    render

  const deleteArticle = (articleId) => {
		// fetchComments(`/articles/${articleId}`, 'DELETE')
		// 	.then(res =>{
		// 		console.log(res)
				// this.commentsFetch(this.state.articleId);
			// })
			// .catch(console.log);
	}

ArticleNode.propTypes = {
  filteredArticles: PT.array.isRequired,
  users: PT.array.isRequired
}