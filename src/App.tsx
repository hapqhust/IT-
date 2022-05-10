import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import MainNavigation from "./components/Navigation/MainNavigation"
import CarouselImage from './components/Slider/CarouselImage';

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <CarouselImage />
    </Router>
  );
}

export default App;
