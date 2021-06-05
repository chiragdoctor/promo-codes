import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { selectUser } from '../redux/user/user.selector';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = useSelector(selectUser);
  return (
    <Route
      {...rest}
      render={props =>
        !user ? <Redirect to='/login' /> : <Component {...props} />
      }
    />
  );
};

export default PrivateRoute;
