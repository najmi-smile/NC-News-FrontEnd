import React, {Component} from 'react';
import fetch from '../httpRequests/FetchData';
import '../css/SingleArticlePage.css';

class SingleArticlePage extends Component {
  state = {
    user: '',
    articles : [],
    comments : []
  }


  render () {
    console.log(this.props.match.url);
    return (
      <div className="well">
        <div className="row">
          <div className="row-1">
            <div className="col-lg-5">
              <div className="col-1">
                col-lg-5 col-1
              </div>
            </div>
            <div className="col-lg-7">
              <div className="col-2">
                <div id="title">
                  <h1>Title</h1>
                </div>
                <div id="blongs-to">
                  Belongs to
                </div>
                <div id="user">
                  <div id="user-img">
                    UserImage
                  </div>
                  <div id="user-name">
                    User name
                  </div>
                </div>
                <div id="body">
                  Body Message
                </div>
                <div className="article-footer">
                  <div className="row">
                    <div className="col-lg-4">
                      Comments
                    </div>
                    <div className="col-lg-4">
                      votes
                    </div>
                    <div className="col-lg-4">
                      Time created
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
    )
  }
}

export default SingleArticlePage;