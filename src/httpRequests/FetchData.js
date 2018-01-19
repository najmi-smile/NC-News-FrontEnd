import React from 'react';

const FetchData = (url, method) => {
  method =  method || 'GET'
  // console.log('Method', method);
  return fetch(`https://quiet-shore-88770.herokuapp.com/api${url}`,{method:method})
    .then(buffer => buffer.json())
    .then(res => {
      return res;    
    })
}

export default FetchData;