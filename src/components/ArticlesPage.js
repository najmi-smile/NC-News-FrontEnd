import React from 'react';
import { Link } from 'react-router-dom';

import FetchArticles from '../httpRequests/FetchData';
import FetchUsers from '../httpRequests/FetchData';

import '../css/ArticlesPage.css';

class ArticlesPage extends React.Component {
  state = {
    articles: [],
    users : [],
    url: ''
  }

  componentDidMount() {
    const {topic} = this.props.match.params;
    let url = '/articles';
    if(topic) {
      url = `/topics/${topic}/articles`
    }   
    FetchArticles(url)
      .then (res => {
        this.setState({
          articles : res.list_of_articles,
          url: url
        })
      })
      .catch(console.log);
    FetchUsers('/users')
      .then(res => {
        // console.log('users',res);
        this.setState({
          users : res
        })
      })
      .catch(console.log);
  }
  
  vote = (vote,id,index) => {
    const url = `/articles/${id}?vote=${vote}`;
    FetchArticles(url,'PUT')
      .then(res => {
        const newArticles = this.state.articles.concat([])
        newArticles[index] = res;
        this.setState({
          articles : newArticles
        })
      })
      .catch(console.log);
  }
  imgError(e) {
    console.log('****',e.target);
    e.target = `<img src={require("../images/icon.png") onError=null}>`
  }
  render() {
    const { articles , users } = this.state;
    let articleNode;
    if(articles.length > 0) {
      articleNode = articles.map((article,i) => {
        let imgLink,username;
        users.forEach(user => {
          if (article.created_by === user.username) {
            imgLink = user.avatar_url;
            username = user.username;
          }
        });
        // console.log('***',username);
        // if(username === undefined) username = '';

        return (
          <div key={`${article._id}`} className="article-parent row">
            <div key={`${article._id}-votes-section`} className="article-votes col-lg-1 col-md-1 col-sm-2">
              <span id="up-arrow" type="button" 
              className="btn glyphicon glyphicon-menu-up"
              onClick={() => this.vote('up',article._id,i)}
              />
              <h4 key={`vote-${article._id}`} id="vote">{article.votes}</h4>
              <span id="down-arrow" type="button" 
              className="btn glyphicon glyphicon-menu-down"
              onClick={() => this.vote('down',article._id,i)}
              />
            </div>
            <div key={`${article._id}-body-section`} className='col-lg-11 col-md-11 col-sm-10'>
              <div key={`${article._id}-article-overview`} className="article-overview">
                <div key={`${article._id}-article-img`} className="article-img">
                  <img src={ imgLink || require("../images/icon.png") } 
                    onError={(e)=>{this.imgError(e)}} 
                  />
                </div>
                <div key={`${article._id}-article-body`} className="article-body">
                  <h4><Link to={`articles/${article && article._id}`}>{article.title}</Link></h4>
                  <small><Link to={`users/${username || ''}`}>{article.created_by}</Link></small>
                </div>
              </div>
            </div>            
          </div>
        )
      }); //  Map Finished    
    }
    return(
      <div className="well">        
        <h2>Available Articles</h2> 
        { articles.length > 0 && articleNode }
          
      </div>
    )
  }
}

export default ArticlesPage;