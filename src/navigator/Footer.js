import React from 'react';
import {NavLink} from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      {/* <hr /> */}
      <ul className="footer">
        <li><NavLink to="#"><i className="fab fa-2x fa-twitter"></i></NavLink></li>
        <li><NavLink to="#"><i className="fab fa-2x fa-facebook"></i></NavLink></li>
        <li><NavLink to="#"><i className="fab fa-2x fa-instagram"></i></NavLink></li>
        <li className="text-right">© Copyright 2018 NC News Blog</li>
      </ul>
    </div>
  );
}

export default Footer;