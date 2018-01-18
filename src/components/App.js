import React, { Component } from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom';

import '../css/App.css';
import '../css/style.css';
import {Icon} from 'react-fa';
import 'bootstrap/dist/css/bootstrap.min.css';

//  Importing Required Pages
import HomePage     from './HomePage';
import AboutPage    from './AboutPage';
import ContactPage  from './ContactPage';
import TopicsPage   from './TopicsPage';
import ArticlesPage from './ArticlesPage';
import UsersPage    from './UsersPage';
import CommentsPage from './CommentsPage';
import NotFound     from './NotFound';
import Footer       from './Footer';
import NavBar       from './NavBar';

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className = "container">
            <header className="App-header">
              <img src ={require("../images/logo.png")} alt="NC Blog" className="logo"/>
            </header>
            <NavBar />
            <Switch>
              <Route exact path='/'   component = { HomePage } />
              <Route path='/about'    component = { AboutPage } />
              <Route path='/contact'  component = { ContactPage } />
              <Route path='/topics'   component = { TopicsPage } />
              <Route path='/articles' component = { ArticlesPage } />
              <Route path='/comments' component = { CommentsPage } />
              <Route path='/users'    component = { UsersPage } />
              
              
              <Route component = {NotFound} />
            </Switch>
            <Footer />
          </div>
        </div>
      </BrowserRouter>      
    );    //  /* return */  

  }   // /* render() */
}   //   class App extends Component

export default App;
