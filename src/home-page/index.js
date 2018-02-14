import React from 'react';
import {fetchArticles,fetchUsers,fetchComments,fetchTopics} from '../httpRequests';
import ArticlesPage from './ArticlesPage';
import './index.css';
class HomePage extends React.Component {
  state = { 
    users:null,
    topics:null
  }
  componentDidMount(){
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
    const { users, topics } = this.state;
    let flag;
    if(users && topics) flag = true;
      return(
        <div className="home-wrapper">
          <div className="columns">
            <div className="column is-one-third">
              { flag &&
                  <ArticlesPage 
                    users={ users } 
                    topics= { topics }
                  />
              }
            </div>  {/* is-one-third */}
            <div className='column is-two-third'>
              <div className="home-right-side">
                <div className="hero">
                  <div className='hero-body isWhite'>

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