import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLoggedInUser } from '../redux/user/user.action';
import { selectUser } from '../redux/user/user.selector';
import { loginUser } from '../services/user';
import './Login.css';
const Login = props => {
  const dispatch = useDispatch();

  const [loginForm, setLoginForm] = useState({
    email: 'chirag@email.com',
    password: 'chirag',
  });

  const onChangeHandler = e => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async () => {
    try {
      if (loginForm.email.length > 0 && loginForm.password.length > 0) {
        const user = await loginUser({ ...loginForm });
        dispatch(setLoggedInUser(user));
        props.history.push('/');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='login-container'>
      <div className='d-flex justify-content-center h-100'>
        <div className='card'>
          <div className='card-header'>
            <h3>Sign In</h3>
          </div>
          <div className='card-body'>
            <div className='input-group form-group'>
              <div className='input-group-prepend'>
                <span className='input-group-text'>
                  <i className='fas fa-user'></i>
                </span>
              </div>
              <input
                type='text'
                name='email'
                className='form-control'
                placeholder='email'
                value={loginForm.email}
                onChange={onChangeHandler}
              />
            </div>
            <div className='input-group form-group'>
              <div className='input-group-prepend'>
                <span className='input-group-text'>
                  <i className='fas fa-key'></i>
                </span>
              </div>
              <input
                type='password'
                name='password'
                className='form-control'
                placeholder='password'
                value={loginForm.password}
                onChange={onChangeHandler}
              />
            </div>
            <div className='form-group'>
              <input
                name='loginBtn'
                type='submit'
                value='Login'
                className='btn login_btn'
                onClick={onSubmitForm}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
