import React from 'react';
import PT from 'prop-types';
import moment from "moment";
import { Link } from 'react-router-dom';
import {fetchArticles,fetchUsers} from '../../httpRequests';
class User extends React.Component {
  state = { 
    user : null,
    articles : []
  }
  componentDidMount(){
    const userName = this.props.userName || this.props.match.params.username.split(':').pop(); 
    fetchArticles('/articles')
    .then (res => {
      this.setState({
        articles : res.list_of_articles
      })
    })
    .catch(console.log);
    fetchUsers(`/users/${userName}`)
    .then(res=>{
      this.setState({
        user : res
      })
    })
    .catch(console.log);
  }
  render(){
    const { user, articles } = this.state; 
    var userNode;
    if(user  && articles) {
      const userArticles = articles.filter(article => {
        return article.created_by === user.username;
      });    
      userNode = <div>
        < article key={user._id} className="media" >
          <figure className="media-left">
            <p className="image is-64x64">
              {<Link to={`/users/${user.username}`}>{<img src={ user.avatar_url } alt="user" />}</Link>}
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
      <div className="hero">
        <div className="hero-body isWhite">
          <strong>Welcome!</strong>
          <br/>
          {userNode && userNode}
        </div>
      </div>
    )
  }
}   //    class User 

User.prototypes = {
  userId : PT.string.isRequired
}

export default User

