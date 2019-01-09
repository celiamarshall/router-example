import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Page from './Page'
import SpecificPage from './SpecificPage'

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path='/page/:id' component={SpecificPage} />
            <Route path='/page' component={Page} />
            <Route path='/' component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
