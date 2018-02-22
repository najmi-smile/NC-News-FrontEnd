export const fetchArticles =(url, method) => {
  method =  method || 'GET'
  return fetch(`https://quiet-shore-88770.herokuapp.com/api${url}`,{"method":method})
    .then(buffer => buffer.json())
    .then(res => {
      return res;    
    })
}
export const fetchUsers =(url, method) => {
  method =  method || 'GET'
  return fetch(`https://quiet-shore-88770.herokuapp.com/api${url}`,{"method":method})
    .then(buffer => buffer.json())
    .then(res => {
      return res;    
    })
}
export const fetchTopics =(url, method) => {
  method =  method || 'GET'
  return fetch(`https://quiet-shore-88770.herokuapp.com/api${url}`,{"method":method})
    .then(buffer => buffer.json())
    .then(res => {
      return res;    
    })
}
export const fetchComments =(url, method) => {
  method =  method || 'GET'
  return fetch(`https://quiet-shore-88770.herokuapp.com/api${url}`,{ "method":method })
    .then(buffer => buffer.json())
    .then(res => {
      return res;    
    })
}
export const postComment =(url, update) => {
  return fetch(`https://quiet-shore-88770.herokuapp.com/api${url}`,{
    method:'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify(update)
  })
    .then(buffer => buffer.json())
    .then(res => {
      return res;    
    })
}
export const fetchWeather = () => {
  return fetch(
    "https://fcc-weather-api.glitch.me/api/current?lon=-2.24&lat=53.48"
  ).then(buffer => buffer.json());
}
