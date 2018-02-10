export const fetchArticles =(url, method) => {
  method =  method || 'GET'
  console.log('Before Fetch URL', url);
  return fetch(`https://quiet-shore-88770.herokuapp.com/api${url}`,{"method":method})
    .then(buffer => buffer.json())
    .then(res => {
      return res;    
    })
}
export const fetchUsers =(url, method) => {
  method =  method || 'GET'
  console.log('Before Fetch URL', url);
  return fetch(`https://quiet-shore-88770.herokuapp.com/api${url}`,{"method":method})
    .then(buffer => buffer.json())
    .then(res => {
      return res;    
    })
}
export const fetchTopics =(url, method) => {
  method =  method || 'GET'
  console.log('Before Fetch URL', url);
  return fetch(`https://quiet-shore-88770.herokuapp.com/api${url}`,{"method":method})
    .then(buffer => buffer.json())
    .then(res => {
      return res;    
    })
}
export const fetchComments =(url, method) => {
  method =  method || 'GET'
  console.log('Before query to Comments URL', url);
  return fetch(`https://quiet-shore-88770.herokuapp.com/api${url}`,{ "method":method })
    .then(buffer => buffer.json())
    .then(res => {
      return res;    
    })
}
export const postComment =(url, update) => {
  console.log('Before posting comment URL', url);
  console.log('Before posting update is', update);
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
