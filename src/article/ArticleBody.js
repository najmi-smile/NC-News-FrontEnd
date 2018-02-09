import React from 'react';
import Moment from "moment";
import PT from "prop-types";


const ArticleBody = ({article}) => ( 
  <div className='column isDark'>
    <div className="lectureHeader title has-text-white">
      {article && article.created_by}<span className="is-pulled-right subtitle has-text-white">
        {Moment(article && article.created_at).format("dddd Do MMMM YYYY")}
      </span>
      <div className="subtitle is-size-6 has-text-danger">
        {article && article.votes}
      </div>
    </div>

    <div className="lectureNotes box">
      <code className="js customScroll">{article && article.body}</code>
    </div>
  </div>
)

ArticleBody.propTypes = {
  article: PT.object
};

export default ArticleBody;