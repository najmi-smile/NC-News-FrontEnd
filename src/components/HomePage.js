import React from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import '../css/Pre-Next.css';

class HomePage extends React.Component {
  state = {
    articles : [],
    page : null
  }
  componentDidMount(){
    fetch('https://northcoders-news-api.herokuapp.com/api/articles')
      .then(buffer => buffer.json())
      .then(res => {
        // console.log(res.articles);
        this.setState({
          articles : res.articles,
          page : res.articles.length
        })
      })
  }
  handleClick = (option) => {
    console.log('option',option.target.id === 'next');
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
    const {articles,page} = this.state;
    let article = articles[page-1];
    return ( 
      <div className="row">
        <div className="col-md-8">
          <div className="well">
          {/* <% include ./post %> */}
            <article>
              <header>
                <h2>Latest Post</h2> 
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
                    <img src={require("../images/blog1.jpg") } alt="Blog img"/>     
                    <hr />             
                    {article && article.body} 
                  </div>                   
                </div>
                  
              </main>
              <hr />  
              <footer>
                <div className="row">
                  <div className="col-md-4">
                    <i className="fa fa-pencil">  {article && article.comments}    Comments</i>
                  </div>
                  <div className="col-md-4">
                    <i className="fa fa-pencil">  {article && article.votes}  Votes</i>
                  </div>
                  <div className="col-md-4">
                    <i className="fa fa-clock-o"> 14 day ago</i>
                  </div>
                </div>
              </footer> 
            </article>
          </div>
        </div>  
        <div className="col-md-4">
          <div className="well"> 
              topics     
            {/* <% include ./displayTopics %> */}
          </div> 
          <div className="well">
            users
            {/* <% include ./displayUsers %> */}
          </div>         
        </div>  
      </div>  
    );
  }
}


export default HomePage;