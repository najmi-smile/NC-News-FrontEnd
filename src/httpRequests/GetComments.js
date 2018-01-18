import React from 'react';

const GetComments = () => {
  return fetch('https://northcoders-news-api.herokuapp.com/api/comments')
    .then(buffer => buffer.json())
    .then(res => {
      return res;    
    })
}

export default GetComments;