import React from 'react';
import ArticleBody from './ArticleBody';
import Comments from './Comments';
import './article.css';
class Article extends React.Component {

  // TODO this can be just a function when called from other component
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

    articleID : "5a48e2bfae21fcf62286f08f",
    users : [
      {
        "_id": "5a48e2bfae21fcf62286f085",
        "username": "grumpy19",
        "name": "Paul Grump",
        "avatar_url": "http://www.tumbit.com/profile-image/4/original/mr-grumpy.jpg",
        "__v": 0,
        "created_at": 1514726078470
      },
      {
        "_id": "5a48e2bfae21fcf62286f086",
        "username": "happyamy2016",
        "name": "Amy Happy",
        "avatar_url": "http://vignette1.wikia.nocookie.net/mrmen/images/7/7f/mr_happy.jpg/revision/latest?cb=20140102171729",
        "__v": 0,
        "created_at": 1514726078470
      },
      {
        "_id": "5a48e2bfae21fcf62286f087",
        "username": "cooljmessy",
        "name": "Peter Messy",
        "avatar_url": "http://i.imgur.com/wfx0neu.jpg",
        "__v": 0,
        "created_at": 1514726078470
      },
      {
        "_id": "5a48e2bfae21fcf62286f088",
        "username": "weegembump",
        "name": "Gemma Bump",
        "avatar_url": "http://www.upandrunning.co.uk/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/m/r/mr-bump.jpg",
        "__v": 0,
        "created_at": 1514726078470
      },
      {
        "_id": "5a48e2bfae21fcf62286f089",
        "username": "jessjelly",
        "name": "Jess Jelly",
        "avatar_url": "https://s-media-cache-ak0.pinimg.com/564x/39/62/ec/3962eca164e60cf46f979c1f57d4078b.jpg",
        "__v": 0,
        "created_at": 1514726078470
      },
      {
        "_id": "5a48e2caae21fcf62286f1cc",
        "username": "northcoder",
        "name": "Awesome Northcoder",
        "avatar_url": "https://avatars3.githubusercontent.com/u/6791502?v=3&s=200",
        "__v": 0,
        "created_at": 1514726078470
      }
    ]
  }
  componentDidMount(){
    // TODO need to receive the following
    // const {article,users} = this.props;
  }  // componentDidMount

  render(){
    const { article, users } = this.state;
    const articleUser = users.filter(user => {
      return user.username === article.created_by
    })
    let articleUsers;
    if(article && users) articleUsers = true;
    return(
      <div className="article columns isDark">
        <div className="hero column is-two-third">
          { article && 
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