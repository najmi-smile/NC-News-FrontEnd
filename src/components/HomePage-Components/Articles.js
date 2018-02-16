import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import GetArticles from '../../httpRequests/FetchData';

class Articles extends React.Component {
  state = {
    articles: [],
    page : null
  }

  componentDidMount() {
    GetArticles('/articles')
    .then (res => {
      this.setState({
        articles : res.list_of_articles,
        page : res.articles_found
      })
    })
    .catch(console.log);
  }
  handleClick = (option) => {
    if(option.target.id === 'next' && this.state.page > 1){
      this.setState({      
        page : this.state.page - 1
      })
    }
    if(option.target.id === 'pre' && this.state.page < this.state.articles.length){
      this.setState({      
        page : this.state.page + 1
      })
    }   
  }
  render() {
    const { articles,page } = this.state;
    let article = articles[page-1];
    let time;
    if(article) time = new Date(article.created_at);
    return(
      <article>
        <header>
          <h2>Latest Article</h2> 
          <div className="row">
            <small>{article && article.title}</small>
            <p><Link to=''> <span className = "fa fa-user"> {article && article.created_by}</span></Link></p>
          </div>
          <hr />                  
        </header>
        <main>
          <div className="row">
          {/* <span  onClick={this.handleClick('next')} className="btn btn-info">Next <i className="fa fa-chevron-right" aria-hidden="true"></i></span> */}
            <ul className="pager">
              <li className="previous"><button id='pre' type="button" onClick={this.handleClick} className="btn btn-info"><i className="fa fa-chevron-left" aria-hidden="true"></i> Previous</button></li>
              <li className="next"><button id='next' type="button" onClick={this.handleClick} className="btn btn-info">Next <i className="fa fa-chevron-right" aria-hidden="true"></i></button></li>
            </ul>
            <div className="img blog-post well">
              <img src={require("../../images/blog1.jpg") } alt="Blog img"/>     
              <hr />             
              {article && article.body} 
            </div>                   
          </div>
            
        </main>
        <hr />  
        <footer>
          <div className="row">
            <div className="col-md-4">
              <Link to={`articles/${article && article._id}/comments`}>View Comments </Link>
            </div>
            <div className="col-md-4">
              <i className="fa fa-pencil">  {article && article.votes}  Votes</i>
            </div>
            <div className="col-md-4">
              <i className="fa fa-clock-o"> {article && moment(article.created_at).format('MMMM Do YYYY, h:mm:ss a') }</i>
            </div>
          </div>
        </footer> 
      </article>
    )
  }

}

export default Articles;