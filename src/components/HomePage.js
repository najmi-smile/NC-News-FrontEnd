import React from 'react';
import { Route, NavLink } from 'react-router-dom';


class HomePage extends React.Component {

    render() {
      return ( 
        <div class="row">
          <div class="col-md-8">
            <div class="well">
            {/* <% include ./post %> */}
            </div>
          </div>  
          <div class="col-md-4">
            <div class="well">             
              {/* <% include ./displayTopics %> */}
            </div> 
            <div class="well">
              {/* <% include ./displayUsers %> */}
            </div>         
          </div>  
        </div>  
      );
    }
}


export default HomePage;