import React from 'react';
import { Link } from 'react-router-dom';


import GetTopics from '../httpRequests/GetTopics.js';

class Topics extends React.Component {
  state = {
    topics : []
  }
  componentDidMount(){
    GetTopics()
      .then (res => {
        this.setState({
        topics: res.topics
        })
      })
      .catch(console.log);   
  }

  render() {
    const {topics} = this.state;
    return (
      <div>
        <h4>Topics <Link to="#"></Link></h4>
        <div className="row">
          <ul className="list-unstyled">
            {topics.map(topic => {
              return <div className="col-sm-6" key={topic._id}><li ><Link to="">{topic.title}</Link></li></div>
            })}
          </ul>                
        </div>
      </div>
    )
  }
  
 

  
  
}

export default Topics;

