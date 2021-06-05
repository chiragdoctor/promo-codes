import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/user/user.selector';
import './Header.css';

const Header = () => {
  const user = useSelector(selectUser);
  return (
    <div className='header-container'>
      {user && <div className='username'>{user.username}</div>}
    </div>
  );
};

export default Header;
