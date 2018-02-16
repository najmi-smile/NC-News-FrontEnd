import React from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import '../css/Pre-Next.css';

import Articles from './HomePage-Components/Articles';
import Topics from './HomePage-Components/Topics';
import Users from './HomePage-Components/Users';


const HomePage = () => {
  return ( 
    <div className="row">
      <div className="col-md-8">
        <div className="well">
          <Articles />
        </div>
      </div>  
      <div className="col-md-4">
        <div className="well"> 
          <Topics />  
        </div> 
        <div className="well">
          <Users />
        </div>         
      </div>  
    </div>  
  );
}


export default HomePage;