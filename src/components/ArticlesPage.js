import React from 'react';
import { Link } from 'react-router-dom';

import GetArticles from '../httpRequests/FetchData';

import '../css/ArticlesPage.css';

class ArticlesPage extends React.Component {
  state = {
    articles: [],
    url: ''
  }

  componentDidMount() {
    const {topic} = this.props.match.params;
    let url = '/articles';
    if(topic) {
      url = `/topics/${topic}/articles`
    }   
    GetArticles(url)
    .then (res => {
      this.setState({
        articles : res.list_of_articles,
        url: url
      })
    })
    .catch(console.log);
  }
  
  vote = (vote,id,index) => {
    const url = `/articles/${id}?vote=${vote}`;
    GetArticles(url,'PUT')
      .then(res => {
        const newArticles = this.state.articles.concat([])
        newArticles[index] = res;
        this.setState({
          articles : newArticles
        })
      })
      .catch(console.log);
  }
  render() {
    const { articles } = this.state;
    let articleNode;
    if(articles.length > 0) {
      articleNode = articles.map((article,i) => {
        return (
          <div key={`${article._id}`} className="article-parent row">
            <div key={`${article._id}-votes`} className="article-votes col-lg-1 col-md-1 col-sm-2">
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
            <div key={`${article._id}-overview`} className="article-overview col-lg-11 col-md-11 col-sm-10">
              <div className="row">
                <div key={`${article._id}-overview-img`} className="col-lg-3 col-md-3 col-sm-6">
                  <div className="article-img">
                    <img />
                  </div>
                </div>
                <div key={`${article._id}-overview-body`} className="col-lg-9 col-md-9 col-sm-6">
                  <h4>{article.title}</h4>
                  <small>{article.created_by}</small>
                </div>                  
              </div>
            </div>
          </div>
        )
      })
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