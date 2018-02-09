import React from 'react';

const Footer = () => {
  return (
    <div>
      {/* <hr /> */}
      <ul className="footer">
        <li><a href="#"><i className="fab fa-2x fa-twitter"></i></a></li>
        <li><a href="#"><i className="fab fa-2x fa-facebook"></i></a></li>
        <li><a href="#"><i className="fab fa-2x fa-instagram"></i></a></li>
        <li className="text-right">© Copyright 2018 NC News Blog</li>
      </ul>
    </div>
  );
}

export default Footer;