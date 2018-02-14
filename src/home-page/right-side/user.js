import React from 'react';
import PT from 'prop-types';
import moment from "moment";
import { Link } from 'react-router-dom';

export const User = ({ user, userArticles }) => {
  var userNode;
  if(user  && userArticles) {
    userNode = <div>
      < article key={user._id} className="media" >
        <figure className="media-left">
          <p className="image is-64x64">
            {<Link to={`users/${user._id}`}>{<img src={ user.avatar_url } alt="user" />}</Link>}
          </p>
        </figure>
        
          <div className="media-content" style={{ overflow: 'hidden' }}>
            <div className="content">
              <p>
                <strong>{user.name || user.username }</strong>
                <br/>
              </p>
            </div> 												
          </div>
        <div className="media-right">
        <strong>Joined since:</strong>{ ` ${moment(user.created_at).format("MMM Do YY")}`} 
        </div>
      </article >
      <br />
      <h1>List of <strong>Authored Articles</strong></h1>
      <br/>
      {userArticles &&
      <ul>{
        userArticles.map((article,i) => {
          return <li key={i}><Link to={`/article/${article._id}`}>{article.title}</Link></li>
          
        })      
      }</ul> }
    </div>
  }   //    if
         
  return (
    <div>
      <br/>
      <strong>Welcome!</strong>
      <br/>
      {userNode && userNode}
    </div>
  )
}

User.prototypes = {
  user : PT.object.isRequired,
  userArticles : PT.array.isRequired
}


