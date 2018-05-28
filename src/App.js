import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Homepage from './pages/Home';

class App extends Component {
  render() {
    const env = process.env.PUBLIC_URL;
    return (
        <BrowserRouter basename={env}>
          <Switch>
            <Route exact path="/" component={Homepage}/>
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
