import React from 'react';
import ArticleBody from './ArticleBody';
import Comments from './Comments';
import './article.css';
import {fetchUsers, fetchArticles} from '../httpRequests';
class Article extends React.Component {
  state = {
    article:null,
    articleID : null,
    users : null
  }
  componentDidMount(){
    const articleId = this.props.match.params.articleId.split(':').pop();
    fetchArticles(`/articles/${articleId}`)
      .then(res => {
        this.setState({
          article: res,
          articleID: articleId
        })
      })
      .catch(console.log);
    fetchUsers('/users')
      .then(res => {
        this.setState({
          users : res
        })
      })
  }  // componentDidMount

  render(){
    const { article, users } = this.state;
    var articleUser;
    if(users !== null && article !== null){
      articleUser = users.filter(user => {
        return user.username === article.created_by
      })
    }
    let articleUsers;
    if(article && users) articleUsers = true;
    return(
      <div className="article columns isDark">
        <div className="hero column is-two-third">
          { articleUser && 
            <ArticleBody 
              article={article}
              articleUser={articleUser[0]}
            />
          }
        </div>
        <div className='hero column is-one-third'>
          <div className='hero-body articleRightBody isWhite customScroll'>
            <div className=''>
              {articleUsers &&
                <Comments 
                  articleId={article._id}
                  users={users}
                /> 
              }             
            </div>
          </div>
        </div>
      </div>  //  className="article
    )   //  return
  } //  render

}   //  class Article

export default Article;