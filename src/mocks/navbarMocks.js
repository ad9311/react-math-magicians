import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

export default function NavBarMock() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Calculator">Calculator</Link>
            </li>
            <li>
              <Link to="/Quotes">Quotes</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/Calculator">
            <About />
          </Route>
          <Route path="/Quotes">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home page</h2>;
}

function About() {
  return <h2>Calculator page</h2>;
}

function Users() {
  return <h2>quotes pages</h2>;
}
