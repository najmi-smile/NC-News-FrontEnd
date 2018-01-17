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
              <li><NavLink to="/about"><span className="glyphicon glyphicon-font"></span> About</NavLink></li>
              <li><NavLink to="/contact"><span className="glyphicon glyphicon-phone" ></span> Contact</NavLink></li>
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