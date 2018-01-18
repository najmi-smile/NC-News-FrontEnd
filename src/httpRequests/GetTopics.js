import React from 'react';

const GetTopics = () => {
  return fetch('https://northcoders-news-api.herokuapp.com/api/topics')
    .then(buffer => buffer.json())
    .then(res => {
      return res;    
    })
}

export default GetTopics;