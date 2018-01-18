import React from 'react';

const Post = () => {
  return (
    <div className="row">
        <div className="col-md-8">
          <div className="well">
          {/* <% include ./post %> */}
            <article>
              <header>
                <h2>Latest Post</h2> 
                <small>Article Title</small>
                <a href=""> <p><span className = "fa fa-user"></span> user</p></a>
                <hr />                  
              </header>
              <main>
                <div className="row">
                  <div className="col-md-5">
                    <div className="img blog-post well">
                      <img src={require("../images/blog1.jpg") } alt="Blog img"/>                  
                    </div> 
                  </div>
                  <div className="col-md-7">
                    <div className="img blog-post well">
                      <img src={require("../images/blog1.jpg") } alt="Blog img"/>                  
                    </div> 
                  </div>
                </div>  
              </main>
              <hr />  
              <footer>
                <div className="row">
                  <div className="col-md-4">
                    <i className="fa fa-pencil">  Comments</i>
                  </div>
                  <div className="col-md-4">
                    <i className="fa fa-pencil">  Votes</i>
                  </div>
                  <div className="col-md-4">
                    <i className="fa fa-clock-o"> 14 day ago</i>
                  </div>
                </div>
              </footer> 
            </article>
          </div>
        </div>  
        <div className="col-md-4">
          <div className="well"> 
              topics     
            {/* <% include ./displayTopics %> */}
          </div> 
          <div className="well">
            users
            {/* <% include ./displayUsers %> */}
          </div>         
        </div>  
      </div>  
  )
}

export default Post;