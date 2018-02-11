import React from 'react';
import Moment from "moment";
import PT from "prop-types";
import VoteArticle from './voteArticle';
import Footer from '../navigator/Footer';

const ArticleBody = ({article}) => ( 
  <div className='column isDark'>
    <div className="title has-text-white">
      {article && article.created_by}
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
    <Footer />
  </div>
)

ArticleBody.propTypes = {
  article: PT.object.isRequired
};

export default ArticleBody;