import React from 'react';
import {fetchComments} from '../httpRequests';
// import Comments from './Comments';
import ArticleBody from './ArticleBody';
import PostComment from './PostComment';
import Comments from './Comments';
import './article.css';



class Article extends React.Component {
  state = {
    article:{
      "_id": "5a48e2bfae21fcf62286f08f",
      "title": "Why do England managers keep making the same mistakes?",
      "body": "When Roy Hodgson resigned after this summer’s debacle, the England managerial merry go-round set into motion raising hopes that change would improve the nations fortunes.  In came Sam Allardyce but the same old squad was announced – apart from Michail Antonio – resulting in a similar type performance that was customary this summer. I was an advocate of Big Sam’s appointment because of the fact he managed down the league and could see that talent lay beyond just the big clubs in the country. Roy had many faults but the biggest frustration for me was he failed to utilise an already diminished pool of English players by continuing to pick the so called elite players – who are all tainted with failure. To be fair to Allardyce his first England game came so early in the season that it made making whole sale changes difficult. We shall never know if he would have picked different players. Since he left the job it was up to Gareth Southgate to take on the mantle and again hope arose that he may start to pick some of the talented under 21s that he has worked with over the last five years.",
      "created_by": "grumpy19",
      "belongs_to": "football",
      "__v": 0,
      "created_at": 1514726078477,
      "votes": 10
    },
    articleComments : null,
    articleID : "5a48e2bfae21fcf62286f08f"
  }
  componentDidMount(){
    this.fetchComments('/articles/5a48e2bfae21fcf62286f08f/comments')
  }  // componentDidMount
  fetchComments(url){
    fetchComments(url)
    .then(res => {
      console.log(res);
      this.setState({
        articleComments:res.list_of_comments
      })
    })
    .catch(console.log);
  }   //  fetchComments
  render(){
    const { articleComments,article } = this.state;
    return(
      <div className="article columns isWhite">
        <div>
          <ArticleBody article={article}/>
        </div>
        <div className='hero column is-one-third isWhite articleRightPane'>
          <div className='hero-body articleRightBody isWhite customScroll'>
            <div className="">
              <div className='commentInput'>  
                <PostComment />          
              </div>
              <div className=''>
                <Comments />              
              </div>
            </div>
          </div>
        </div>
      </div>  //  className="article
    )   //  return
  } //  render

}   //  class Articl

export default Article;