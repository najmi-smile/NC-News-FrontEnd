import React from 'react';
import PT from "prop-types";
import {fetchArticles} from '../httpRequests';
class VoteArticle extends React.Component {
  state = {
    article: null,
    articleId: null,
    voteInc : 'false'
  }
  //  TODO  need sorting why class is not been changed
  componentDidMount(){
    const {	article, articleId } = this.props;
    this.setState({
      article : article,
      voteInc: 'false'
    })
  }
  fetchArticles = () => {
    const { article } = this.state;
    const url = `/articles/${article._id}`;
    fetchArticles(url)
    .then(res => {
      var val;
      this.state.voteInc === 'false' 
        ? val = 'true'
        : val = 'false';
      this.setState({
        article : res,
        voteInc: val
      })
    })
    .catch(console.log);
  }
  voteArticle = (vote) => {

    const { article } = this.state;
    const url = `/articles/${article._id}?vote=${vote}`;
    fetchArticles(url,'PUT')
      .then((res) => {
        this.fetchArticles();
      })
      .catch(console.log);
	} //  voteArticle()
  render() {
    const { article, voteInc } = this.state;
    const node1 =  <p className="button is-danger" id="voteUpButton" 
            onClick={() => this.voteArticle('up')}>
            <span><i className="fas fa-thumbs-up"></i></span>
            <span className='section' id="voteCount">{article && article.votes}</span>
          </p>
    const node2 =  <p className="button is-info" id="voteUpButton" 
            onClick={() => this.voteArticle('down')}>
            <span><i className="fas fa-thumbs-down"></i></span>
            <span className='section' id="voteCount">{article && article.votes}</span>
          </p>
    let node;
    if(voteInc === 'false'){
      node = node1;
    } else {
      node = node2;
    }

    return (
      <div>
       {node}
      </div>
    )
  }

}

VoteArticle.propTypes = {
  article: PT.object.isRequired
};


export default VoteArticle;