import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/' component={() => <div>Home Page</div>} />
      </Switch>
    </Router>
  );
};

export default App;
