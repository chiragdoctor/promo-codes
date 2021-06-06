import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Dashboard from './Dashboard';
import Filter from './Filter';
import ServiceList from './ServiceList';

describe('Dashboard Component', () => {
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
        <Dashboard />
      </Provider>,
    );
  });

  it('should render dashboard component', () => {
    const dashboard = wrapper.find(Dashboard);
    expect(dashboard.exists()).toBe(true);
  });

  it('should render filter component', () => {
    const filter = wrapper.find(Filter);
    expect(filter.exists()).toBe(true);
  });

  it('should service list component', () => {
    const list = wrapper.find(ServiceList);
    expect(list.exists()).toBe(true);
  });
});
