import React from 'react';
import '../css/navbar.css';
import {NavLink} from 'react-router-dom';
const NavBar = () => {
  return(
    <div className="nav-bar">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
      
          <div className="navbar-header">
            <NavLink className="menu" to='#'><i className="fa fa-bars" id="menu_icon"></i></NavLink>
            <NavLink className="navbar-brand" to="/">TheBlog</NavLink>
          </div>
          {/* <!--navbar-header close--> */}
      
          <div className="collapse navbar-collapse drop_menu" id="content_details">
            <ul className="nav navbar-nav">
              <li><NavLink to="/articles">Articles</NavLink></li>
              {/* <li><NavLink to="/topics">Topics</NavLink></li> */}
              {/* <li><NavLink to="/users">Users</NavLink></li> */}
              {/* <li><NavLink to="/comments">Comments</NavLink></li> */}
              <li><NavLink to="/contact">Contact</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
            </ul>    
            {/*<!--nav navbar-nav close--> */}
            <ul className="nav navbar-nav navbar-right">
              <li><NavLink to=""><span className="fa fa-user-plus"> Sign Up</span></NavLink></li>

              <li><NavLink to=""><span className="glyphicon glyphicon-log-in"> Login</span></NavLink></li>
            </ul>
            {/* <!--navbar-right close--> */}
            
          </div>
          {/* <!--collapse navbar-collapse drop_menu close--> */}
        </div>
        {/* <!--container-fluid close--> */}
      </nav>    {/*<!--navbar navbar-inverse close--> */}
    </div>
  );
};

export default NavBar;