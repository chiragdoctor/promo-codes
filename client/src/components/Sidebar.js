import React from 'react';
import Logo from './Logo';
import Circle from './Circle';
import './Sidebar.css';

const Sidebar = props => {
  const drawCircles = () => {
    return [1, 2, 3, 4, 5, 6, 7, 8].map(value => <Circle key={value} />);
  };
  return (
    <div className='sidebar-container'>
      <Logo />
      <div className='circle'>{drawCircles()}</div>
      {props.children}
    </div>
  );
};

export default Sidebar;
