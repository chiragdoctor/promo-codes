import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div className='container'>
      <Router>
        <Sidebar />
        <Header />
        <Switch>
          <Route exact path='/login' component={Login} />
          <PrivateRoute exact path='/' component={Dashboard} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
