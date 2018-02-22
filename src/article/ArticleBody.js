import React from 'react';
import Moment from "moment";
import PT from "prop-types";
import { Link } from 'react-router-dom';
import VoteArticle from './voteArticle';

const ArticleBody = ({article,articleUser}) => {
  const username =  articleUser.username || 'unknown';
  return (
    <div className='column isDark'>
      <div className="title has-text-white">
        {article && <Link to={`/users/${username}`}>{article.created_by}</Link>}
        <span className="is-pulled-right subtitle has-text-white">
          {article && <VoteArticle article={article}/>}
        </span>
        <div className="subtitle is-size-6 has-text-danger">
          {Moment(article && article.created_at).format("dddd Do MMMM YYYY")}
        </div>
      </div>

      <div className="box article-body">
        <p>{article && article.title}</p>
        <code className="js customScroll">{article && article.body}</code>
      </div>
    </div>
  )
}

ArticleBody.propTypes = {
  article: PT.object.isRequired,
  articleUser: PT.object.isRequired
};

export default ArticleBody;