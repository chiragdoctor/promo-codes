import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAllServices } from '../redux/service/service.action';
import { getAllServices, getServicesByName } from '../services/service';
import './ServiceList.css';

import './Filter.css';
const Filter = () => {
  const [filterValue, setFilterValue] = useState('');
  const dispatch = useDispatch();
  const handleResetFilter = async () => {
    setFilterValue('');
    const res = await getAllServices();
    dispatch(setAllServices(res));
  };

  const handleFilterChange = async e => {
    setFilterValue(e.target.value);
    const res = await getServicesByName(e.target.value);
    dispatch(setAllServices(res));
  };

  return (
    <div className='filter-container'>
      <div className='title'>Filter</div>
      <div className='form-container'>
        <input
          type='text'
          name='filter'
          id='filter'
          className='filter-input'
          value={filterValue}
          onChange={handleFilterChange}
        />
        <button
          type='button'
          name='reset'
          onClick={handleResetFilter}
          className='reset-btn'
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Filter;
