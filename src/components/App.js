import React, { Component } from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom';

import '../css/App.css';
import '../css/style.css';
import {Icon} from 'react-fa';
import 'bootstrap/dist/css/bootstrap.min.css';


//  Importing Required Pages
import HomePage           from './HomePage';
import AboutPage          from './AboutPage';
import TopicsPage         from './TopicsPage';
import ContactPage        from './ContactPage';
import ArticlesPage       from './ArticlesPage';
import SingleArticlePage  from './SingleArticlePage';
import CommentsPage       from './CommentsPage';
import UsersPage          from './UsersPage';
import NotFound           from './NotFound';
import NavBar             from './NavBar';
import Footer             from './Footer';

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
              <Route exact path='/about'    component = { AboutPage } />
              <Route exact path='/contact'  component = { ContactPage } />
              <Route exact path='/topics/:topic/articles' component = { ArticlesPage }/>              
              <Route exact path='/articles' component = { ArticlesPage } />
              <Route exact path='/articles/:id' component = { SingleArticlePage } />
              <Route exact path='/articles/:id/comments' component = { CommentsPage } />
              <Route exact path='/users/:username'    component = { UsersPage } />
              
              
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
