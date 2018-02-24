import React from 'react';

import {NavLink} from 'react-router-dom';
const NavBar = () => {
  return(
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <NavLink to='' className="navbar-item">
          <span> The BLog</span>
        </NavLink>

        <button className="button navbar-burger">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className="navbar-menu">
        <ul className="navbar-start">
          <li className="navbar-item">
            <div className="field is-grouped">
              <p className="control">
                <NavLink to='' className="button">
                  <span className="icon">
                    <i className="fab fa-pied-piper-alt"></i>
                  </span>
                  <span>About</span>
                </NavLink>
              </p>
            </div>
          </li>
          <li className="navbar-item">
            <div className="field is-grouped">
              <p className="control">
                <NavLink to='' className="button">
                  <span className="icon">
                    <i className="fas fa-assistive-listening-systems"></i>
                  </span>
                  <span>Contact</span>
                </NavLink>
              </p>
            </div>
          </li>
        </ul>
        <ul className="navbar-end">
          <li className="navbar-item">
            <div className="field is-grouped">
              <p className="control">
                <NavLink to='' className="button">
                  <span className="icon">
                    <i className="fas fa-user-plus"></i>
                  </span>
                  <span>Sing Up</span>
                </NavLink>
              </p>
            </div>
          </li>
          <li className="navbar-item">
            <div className="field is-grouped">
              <p className="control">
                <NavLink to='' className="button">
                  <span className="icon">
                    <i className="fas fa-sign-in-alt"></i>
                  </span>
                  <span>Sing In</span>
                </NavLink>
              </p>
            </div>
          </li>
          <li className="navbar-item">
            <div className="field is-grouped">
              <p className="control">
                <NavLink to='' className="button">
                  <span className="icon">
                    <i className="fas fa-sign-out-alt"></i>
                  </span>
                  <span>Sing Out</span>
                </NavLink>
              </p>
            </div>
          </li>
          
        </ul>
          
        
        

        
      </div>
    </nav>
  );
};

export default NavBar;