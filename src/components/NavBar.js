import React from 'react';
import '../css/navbar.css';
// import {NavLink} from 'react-router-dom';
const NavBar = () => {
  const activeStyle = {
    'color' : 'lightskyblue',
    'textDecoration ': 'underline'
  };
  return(
    <div className="nav-bar">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
      
          <div className="navbar-header">
            <a className="menu"><i className="fa fa-bars" id="menu_icon"></i></a>
            <a className="navbar-brand" href="/api">TahirRaza</a>
          </div>
          {/* <!--navbar-header close--> */}
      
          <div className="collapse navbar-collapse drop_menu" id="content_details">
            <ul className="nav navbar-nav">
              {/* <!-- <li><a href="#"><span className="glyphicon glyphicon-home"></span> Home</a></li> --> */}
              <li><a href="#"><span className="glyphicon glyphicon-font"></span> About</a></li>
              <li><a href="/api/contact" data-toggle="modal" data-target="#contact-modal"><span className="glyphicon glyphicon-phone" ></span> Contact</a></li>
            </ul>    
            {/*<!--nav navbar-nav close--> */}
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#" data-toggle="modal" data-target="#signup-modal"><span className="fa fa-user-plus"></span> Sign Up</a></li>
              <li><a href="#" data-toggle="modal" data-target="#login-modal"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
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