import React from 'react';

const GetUsers = () => {
  return fetch('https://northcoders-news-api.herokuapp.com/api/users')
    .then(buffer => buffer.json())
    .then(res => {
      return res;    
    })
}

export default GetUsers;