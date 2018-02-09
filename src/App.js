import React, { Component } from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom';

import NavBar       from './navigator/NavBar';
import Article      from './article/Article';
import ContactPage  from './ContactPage';
import AboutPage    from './AboutPage';
import Footer       from './navigator/Footer';
import NotFound     from './navigator/NotFound';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {/* <div className = "container"> */}
            <header className="App-header">
              <img src ={require("./images/logo.png")} alt="NC Blog" className="logo"/>
            </header>
            <NavBar />
            <Switch>
              <Route exact path='/'   component = {  Article } />
              {/* <Route exact path='/about'    component = { AboutPage } />
              <Route exact path='/contact'  component = { ContactPage } />
              <Route exact path='/topics/:topic/articles' component = { ArticlesPage }/>              
              <Route exact path='/articles' component = { ArticlesPage } />
              <Route exact path='/articles/:id' component = { SingleArticlePage } />
              <Route exact path='/articles/:id/comments' component = { CommentsPage } />
              <Route exact path='/users/:username'    component = { UsersPage } /> */}
              
              
              <Route component = {NotFound} />
            </Switch>
            <Footer />
          {/* </div> */}
        </div>
      </BrowserRouter>      
    );
  }
}

export default App;
