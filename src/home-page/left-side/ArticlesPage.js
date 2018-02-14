import React from 'react';
import { Link } from 'react-router-dom';
import { fetchArticles, fetchTopics } from '../../httpRequests';
import  {ArticleNode}  from './ArticleNode';
import PT from 'prop-types';
import {LeftSideSearch} from './LeftSideSearch';

class ArticlesPage extends React.Component {
  state = {
    articles: [],
    topics: [],
    searchTerm:''
  }
  componentDidMount() {
    fetchArticles('/articles')
    .then (res => {
      this.setState({
        articles : res.list_of_articles
      })
    })
    .catch(console.log);
    fetchTopics('/topics')
      .then (res => {
        this.setState({
        topics: res
        })
      })
      .catch(console.log); 
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
  updatePane = (e) => {
    let url;
    const slug = e.target.value.toLowerCase();
    if (slug === 'show all') url = '/articles';
    else url = `/topics/${slug}/articles`;
    this.FetchArticles(url);
  }
  
  render() {
    const { articles, searchTerm, topics } = this.state;
    const { users } = this.props;

    var filteredArticles;
    if(articles !== null) {
      filteredArticles = this.filterArticles();      
    }  
    var flag;
    if (users && filteredArticles) flag = true;
    
    return(
      <div className="hero">
        <LeftSideSearch 
        updatePane = {this.updatePane} 
        handleChange={this.handleChange} 
        topics={topics}
      />
        <div className='hero-body isWhite'>
          <div className='container'>
            <p style={{"fontSize": '1em', color:'red'}} className="title">Blog Articles found : {filteredArticles.length}</p>
          </div>
          <div className="home-left-side customScroll">
            { flag && <ArticleNode 
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
  users : PT.array.isRequired
}

export default ArticlesPage;