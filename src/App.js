import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import './App.css';
import { Helmet } from "react-helmet";
import * as Sentry from '@sentry/browser';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-171111046-1');

Sentry.init({
  dsn: "https://c3272801c4064ddca53820c63c2b89e2@o381216.ingest.sentry.io/5253700",
  release: '1.0.1'
});

function App() {


  return (
    <Router>
      <Init />
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
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

const handleClick = () => {
  throw new Error('This is an error')
}

const Init = () => {
  let history = useHistory();

  history.listen((location) => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname)
  }
  );

  return (null);
}

function Home(props) {
  return <>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <h1>This is Home page</h1>
  </>;
}

function About() {
  return <>
    <Helmet>
      <title>About</title>
    </Helmet>
    <h1>This is About page</h1>
    <button onClick={() => { handleClick() }}>Break the world</button>
  </>;
}

function Users() {
  return <>
    <Helmet>
      <title>Users</title>
    </Helmet>
    <h1>This is Users page</h1>
  </>;
}

export default App;
