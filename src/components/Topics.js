import React from 'react';
import { Link } from 'react-router-dom';


const Topics = ({topics}) => {
  
  console.log(topics);
  return (
    <div>
      <h4>Topics <Link to="#"></Link></h4>
      <div className="row">
        <ul className="list-unstyled">
          {topics.map(topic => {
            console.log('in topic map',topic)
            return <div className="col-sm-6" key={topic._id}><li ><Link to="">{topic.title}</Link></li></div>
          })}
        </ul>                
      </div>
    </div>
  )
 

  
  
}

export default Topics;

