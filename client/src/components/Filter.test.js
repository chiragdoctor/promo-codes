import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Filter from './Filter';

describe('Filter Component', () => {
  let wrapper;
  let store;
  let initialState = {
    users: {
      user: {
        username: 'abc',
      },
    },
  };
  const mockStore = configureStore([thunk]);
  store = mockStore(initialState);
  store.dispatch = jest.fn();
  beforeEach(() => {
    jest.clearAllMocks();

    wrapper = mount(
      <Provider store={store}>
        <Filter />
      </Provider>,
    );
  });

  it('should render filter component', () => {
    const filter = wrapper.find(Filter);
    expect(filter.exists()).toBe(true);
  });

  it('should input in filter component', () => {
    const input = wrapper.find('input[name="filter"]');
    expect(input.exists()).toBe(true);
  });

  it('should render button to reset filter', () => {
    const resetBtn = wrapper.find('button[name="reset"]');
    expect(resetBtn.exists()).toBe(true);
  });
});
