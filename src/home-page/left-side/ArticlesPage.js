import React from 'react';
import { Link } from 'react-router-dom';
import { fetchArticles, fetchTopics } from '../../httpRequests';
import  {ArticleNode}  from './ArticleNode';
import PT from 'prop-types';
import {LeftSideSearch} from './LeftSideSearch';

class ArticlesPage extends React.Component {
  state = {
    articles: [],
    users : [],
    topics: [],
    searchTerm:''
  }
  componentDidMount() {
    this.FetchArticles('/articles');
    this.setState({
      users : this.props.users
    })
    fetchTopics('/topics')
      .then (res => {
        this.setState({
        topics: res
        })
      })
      .catch(console.log); 
  }
  FetchArticles(url){
    fetchArticles(url)
    .then (res => {
      this.setState({
        articles : res.list_of_articles
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
    const { articles , users, searchTerm, topics } = this.state;
    let filteredArticles;
    
    if(articles !== null) {
      filteredArticles = this.filterArticles();      
    }  
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
  users : PT.array.isRequired
}

export default ArticlesPage;