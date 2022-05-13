import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';

import MainNavigation from './components/Navigation/MainNavigation';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <Switch>
        <Route path='/' exact>
          <HomePage/>
        </Route>
        <Redirect to='/'></Redirect>
      </Switch>
    </Router>
  );
}

export default App;
