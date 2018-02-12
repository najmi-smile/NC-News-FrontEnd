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
      <div className="hero">
        <div className="hero-head">
          <div>
            <input type="text" className="input-filter"
              placeholder='search articles ...'
              onChange={this.handleChange}
              value={searchTerm}
            />
          </div>
        </div>
        <div className='hero-body isWhite'>
          <p style={{"font-size": '1em', color:'red'}} className="title">Articles found : {filteredArticles.length}</p>
          <div className="home-left-side customScroll">
            { articles.length > 0 && <ArticleNode 
              filteredArticles={filteredArticles} 
              users={users}
            /> }
          </div>
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