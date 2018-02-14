import React from 'react';
import {fetchArticles,fetchUsers} from '../httpRequests';
import ArticlesPage from './left-side/ArticlesPage';
import Weather from './right-side/Weather';
import './index.css';
class HomePage extends React.Component {
  state = { 
    users:[],
    articles: []
  }
  componentDidMount(){
    this.FetchArticles('/articles');
    fetchUsers('/users')
    .then(res=>{
      this.setState({
        users : res
      })
    })
    .catch(console.log);
  }  // componentDidMount
    
  FetchArticles(url){
    fetchArticles(url)
    .then (res => {
      this.setState({
        articles : res.list_of_articles
      })
    })
    .catch(console.log);
  }
  render(){
    const { users, articles } = this.state;
    let flag;
    if(articles.length > 0 && users.length > 0) flag = true;
      return(
        <div className="home-wrapper">
          <div className="columns">
            <div className="column is-one-third">
              { flag &&
                <ArticlesPage 
                  users={ users } 
                  articles={ articles }
                />
              }
            </div>  {/* is-one-third */}
            <div className='column is-two-third'>
              <div className="home-right-side">
                <div className="hero">
                  <div className='hero-body isWhite'>
                    <div><Weather/></div>
                    <div>User's Details</div>
                  </div>
                </div>
              </div>
            </div>    {/* column is-two-third */}
           </div>  {/* columns */}
        </div>  
    )   //  return
  } //  render

}   //  class HomePage

export default HomePage;