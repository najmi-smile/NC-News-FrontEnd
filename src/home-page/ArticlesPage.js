import React from 'react';
import { Link } from 'react-router-dom';
import  {ArticleNode}  from './ArticleNode';
import PT from 'prop-types';
// import '../css/ArticlesPage.css';
class ArticlesPage extends React.Component {
  state = {
    articles: [],
    users : [],
    searchTerm:''
  }
  componentDidMount() {
    this.setState({
      articles : this.props.articles,
      users : this.props.users
    })
  }
  handleChange = (e) => {
    this.setState({
      searchTerm:  e.target.value
    })
  }   //  handleChange()
  filterArticles = () => {
    return this.state.articles.filter(article => {
      const body = article.body || article.title || article.belongs_to;
      return body.includes(this.state.searchTerm);
    })
  }   
  render() {
    const { articles , users, searchTerm } = this.state;
    let filteredArticles;
    
    if(articles !== null) {
      filteredArticles = this.filterArticles();      
    }  
    return(
      <div>
         <div className="input-group">
            <input type="text" className="form-control"
            placeholder='search blog for articles'
            onChange={this.handleChange}
            value={searchTerm}
            />
            <span className="input-group-btn">
              <button className="btn btn-default" type="button">
                <span className="glyphicon glyphicon-search"></span>
              </button>
            </span>
          </div> 
          <h2>Available Articles</h2> 
          <div className="articles-list-view">
            { articles.length > 0 && <ArticleNode 
              filteredArticles={filteredArticles} 
              users={users}
            /> }
          </div>       
      </div>
    )
  }
}
ArticlesPage.propTypes = {
  articles : PT.array.isRequired,
  users : PT.array.isRequired,
  selectArticle: PT.func.isRequired
}

export default ArticlesPage;