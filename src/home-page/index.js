import React from 'react';
import {fetchUsers} from '../httpRequests';
import ArticlesPage from './left-side/ArticlesPage';
import Weather from './right-side/Weather';
import User from './right-side/user';
import './index.css';
class HomePage extends React.Component {
  state = { 
    users:[],
  }
  componentDidMount(){
    fetchUsers('/users')
    .then(res=>{
      this.setState({
        users : res.users
      })
    })
    .catch(console.log);
  }  // componentDidMount
  render(){
    const { users } = this.state;
    if(users.length > 0) {
      const user = users[Math.round(Math.random()*users.length-1)];
        return(
          <div className="home-wrapper">
            <div className="columns">
              <div className="column is-one-third">
                <ArticlesPage 
                  users={ users } 
                />
              </div>  {/* is-one-third */}
              <div className='column is-two-third'>
                <div className="home-right-side">
                  <div className="hero">
                    <div className='hero-body isWhite'>
                      <div><Weather/></div>
                      <div>{user && <User userName={user.username}/>}</div>
                    </div>
                  </div>
                </div>
              </div>    {/* column is-two-third */}
             </div>  {/* columns */}
          </div>  
      )   //  return
    }   //    if(users, articles)
    else return(<div>Loading .......</div>);
  } //  render

}   //  class HomePage

export default HomePage;