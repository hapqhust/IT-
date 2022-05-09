import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import MainNavigation from "./components/Navigation/MainNavigation"

const App = () => {
  return (
    <Router>
      <MainNavigation />
    </Router>
  );
}

export default App;
