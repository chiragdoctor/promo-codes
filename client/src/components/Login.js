import React from 'react';
import './Login.css';
const Login = () => {
  return (
    <div className='container'>
      <div className='d-flex justify-content-center h-100'>
        <div className='card'>
          <div className='card-header'>
            <h3>Sign In</h3>
          </div>
          <div className='card-body'>
            <form>
              <div className='input-group form-group'>
                <div className='input-group-prepend'>
                  <span className='input-group-text'>
                    <i className='fas fa-user'></i>
                  </span>
                </div>
                <input
                  type='text'
                  className='form-control'
                  placeholder='email'
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
                  className='form-control'
                  placeholder='password'
                />
              </div>
              <div className='form-group'>
                <input type='submit' value='Login' className='btn login_btn' />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
