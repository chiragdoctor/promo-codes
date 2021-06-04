import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/login' component={Login} />
        <PrivateRoute exact path='/' component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default App;
