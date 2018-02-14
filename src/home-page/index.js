import React from 'react';
import {fetchArticles,fetchUsers,fetchComments,fetchTopics} from '../httpRequests';
import ArticlesPage from './left-side/ArticlesPage';
import './index.css';
class HomePage extends React.Component {
  state = { 
    users:null
  }
  componentDidMount(){
    fetchUsers('/users')
    .then(res=>{
      this.setState({
        users : res
      })
    })
    .catch(console.log);
  }  // componentDidMount
    
 
  render(){
    const { users } = this.state;
      return(
        <div className="home-wrapper">
          <div className="columns">
            <div className="column is-one-third">
              { users &&
                <ArticlesPage 
                  users={ users } 
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