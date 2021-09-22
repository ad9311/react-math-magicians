import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import CalculatorPage from './pages/CalculatorPage';
import Quote from './pages/Quote';
import NoMatch from './pages/NoMatch';
import './App.css';

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Navbar />
    <main className="pcon-6">
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
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </main>
  </Router>
);

export default App;
