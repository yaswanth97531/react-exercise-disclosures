import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Route, Link, Switch, Redirect } from 'react-router-dom';

import Home from './components/Home';
import Messages from './components/Messages';

const App = () => {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="menu">
          <ul>
            <li>
              {' '}
              <Link to="/">Home</Link>{' '}
            </li>
            <li>
              {' '}
              <Link to="/messages">Messages</Link>{' '}
            </li>
          </ul>
        </div>
        <div className="App-intro">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/messages" component={Messages} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
      <div>
        <h3>Disclosures</h3>
        <p>Message 1 disclosure</p>
        <p>Message 2 disclosure</p>
        <p>Message 3 disclosure</p>
        <p>Message 4 disclosure</p>
        <p>Message 5 disclosure</p>
      </div>
    </>
  );
};

export default App;
