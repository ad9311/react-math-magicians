import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import CalculatorPage from './pages/CalculatorPage';
import Quote from './pages/Quote';
import './App.css';

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/calculator">
        <CalculatorPage />
      </Route>
      <Route path="/quote">
        <Quote />
      </Route>
    </Switch>
  </Router>
);

export default App;
