import React from 'react';
import './Dashboard.css';
import Filter from './Filter';
import ServiceList from './ServiceList';

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <div className='h1 heading'>Services</div>
      <Filter />
      <ServiceList />
    </div>
  );
};

export default Dashboard;
