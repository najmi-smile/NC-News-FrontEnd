import React from 'react';

const FetchData = (url) => {
  return fetch(`https://northcoders-news-api.herokuapp.com/api${url}`)
    .then(buffer => buffer.json())
    .then(res => {
      return res;    
    })
}

export default FetchData;