import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Header from './Header';

describe('Header Component', () => {
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
        <Header />
      </Provider>,
    );
  });

  it('should render header component', () => {
    const header = wrapper.find(Header);
    expect(header.exists()).toBe(true);
  });

  it('should render username on header when user is logged in', () => {
    const username = wrapper.find('.username');
    expect(username.exists()).toBe(true);
    expect(username.text()).toBe('abc');
  });

  it('should not render username when user is not logged in', () => {
    let initialState = {
      users: {},
    };
    const mockStore = configureStore([thunk]);
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <Header />
      </Provider>,
    );
    const username = wrapper.find('.username');
    expect(username.exists()).toBe(false);
  });
});
