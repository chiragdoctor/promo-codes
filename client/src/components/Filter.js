import React from 'react';
import './Filter.css';
const Filter = () => {
  const handleResetFilter = () => {
    console.log('reset clicked!!');
  };
  return (
    <div className='filter-container'>
      <div className='title'>Filter</div>
      <div className='form-container'>
        <input type='text' name='filter' id='filter' className='filter-input' />
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
