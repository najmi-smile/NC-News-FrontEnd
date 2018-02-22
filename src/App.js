import React, { Component } from 'react';
import {BrowserRouter,Route, Switch, Link} from 'react-router-dom';

import NavBar       from './navigator/NavBar';
import Article      from './article/Article';
import Footer       from './navigator/Footer';
import NotFound     from './navigator/NotFound';
import HomePage     from './home-page';
import User         from './home-page/right-side/user';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Link to="/"><img src ={require("./images/logo.png")} alt="NC Blog" className="logo"/></Link>
          </header>
          <Switch>
            <Route exact path='/article/:articleId'   component = {  Article } />
            <Route exact path='/'    component = { HomePage } />
            <Route exact path='/users/:username'    component = { User } />

            <Route component = {NotFound} />
          </Switch>
        </div>
      </BrowserRouter>      
    );
  }
}

export default App;
