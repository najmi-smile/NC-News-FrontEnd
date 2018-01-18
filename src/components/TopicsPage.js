import React from 'react';
import { Link } from 'react-router-dom';

import GetTopics from '../httpRequests/GetTopics.js';
import Topics from './HomePage-Components/Topics';

class TopicsPage extends React.Component {
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
    let TopicNode;
    if(topics.length > 0) {
      TopicNode = topics.map(topic => {
        return (
          <ul key = {topic._id}>
            <li>Title : {topic.title}</li>
            <li>Slug : {topic.slug}</li>
            <li><small>Click title for related Articles</small></li>
          </ul>
        )
      })
    }
    return (
      <div>
        <h1>Available Topics</h1>
        {topics.length > 0 && TopicNode}
      </div>
    )
  }
}

export default TopicsPage;