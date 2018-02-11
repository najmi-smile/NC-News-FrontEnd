import React from 'react';
import {fetchArticles,fetchUsers,fetchComments,fetchTopics} from '../httpRequests';
import ArticlesPage from './ArticlesPage';
import './index.css';
class HomePage extends React.Component {
  state = { 
    users:null,
    topics:null,
    articles:null
  }
  componentDidMount(){
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
    fetchUsers('/users')
    .then(res=>{
      this.setState({
        users : res
      })
    })
    .catch(console.log);
  }  // componentDidMount
    
 
  render(){
    const { users, topics, articles} = this.state;
    let articlesFlag;
    if(users && articles) articlesFlag = true;
      return(
        <div className="home-wrapper">
          <div className="columns home-page isDark">
            <div className="hero column is-one-third">
              <div className='hero-body isWhite'>
                <div className="home-left-side customScroll">
                  { articlesFlag &&
                      <ArticlesPage 
                        articles={ articles }
                        users={ users }
                      />
                  }
                </div>
              </div>
            </div>  {/* is-one-third */}
            <div className='hero column is-two-third'>
              <div className='hero-body isWhite'>
                <div className="home-right-side customScroll">

                </div>
              </div>
            </div>    {/* column is-two-third */}
           </div>  {/* columns */}
        </div>  
    )   //  return
  } //  render

}   //  class HomePage

export default HomePage;