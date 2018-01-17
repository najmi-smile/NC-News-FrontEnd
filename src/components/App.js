import React, { Component } from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom';

import '../css/App.css';
import {Icon} from 'react-fa';
import 'bootstrap/dist/css/bootstrap.min.css';

//  Importing Required Pages
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import NotFound from './NotFound';

import NavBar from './NavBar'

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className = "container">
            <NavBar />
            <Switch>
              <Route path='/' component ={ HomePage } />
              <Route path='/about' component ={ AboutPage } />
              <Route path='/contact' component ={ ContactPage } />
              <Route component = {NotFound} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>      
    );    //  /* return */  

  }   // /* render() */
}   //   class App extends Component

export default App;
