import React from 'react';
import GetArticles from '../httpRequests/FetchData';

class ArticlesPage extends React.Component {
  state = {
    articles: []
  }

  componentDidMount() {
    GetArticles('articles')
    .then (res => {
      this.setState({
        articles : res.articles
      })
    })
    .catch(console.log);
  }
  render() {
    const { articles } = this.state;
    let articleNode;
    if(articles.length > 0) {
      articleNode = articles.map(article => {
        return (
          <ul key={article._id}>
            <li><h1>{article.created_by}</h1></li>
            <li><p>{article.title}</p></li>
            <li><small>{article.body}</small></li>
            <li><span>{article.belongs_to}</span></li>
            <li><span>{article.votes}</span></li>
            <li><span>{article.comments}</span></li>
          </ul>
        )
      })
    }
    return(
      <div>        
        <h2>Available Article</h2> 
        { articles.length > 0 && articleNode }
          
      </div>
    )
  }
}

export default ArticlesPage;