import React from 'react';

const GetArticles = (state) => {
  return fetch('https://northcoders-news-api.herokuapp.com/api/articles')
    .then(buffer => buffer.json())
    .then(res => {
      return res;    
    })
}

export default GetArticles;