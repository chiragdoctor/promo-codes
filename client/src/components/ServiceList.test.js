import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ServiceList from './ServiceList';
import Service from './Service';

describe('ServiceList Component', () => {
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
        <ServiceList />
      </Provider>,
    );
  });

  it('should render service list component', () => {
    const list = wrapper.find(ServiceList);
    expect(list.exists()).toBe(true);
  });

  it('should render service component', () => {
    const service = wrapper.find(Service);
    expect(service.exists()).toBe(true);
  });
});
