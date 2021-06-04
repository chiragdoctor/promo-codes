import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Login from './Login';
import * as userService from '../services/user';

describe('Login Component', () => {
  let wrapper;
  let store;
  let initialState = {
    users: {},
  };
  const mockUser = {
    email: 'abc@email.com',
    first_name: 'abc',
    id: 1,
    last_name: 'xyz',
    token: 'abc',
    username: 'abcxyz',
  };
  const mockStore = configureStore([thunk]);
  store = mockStore(initialState);
  store.dispatch = jest.fn();
  let loginUserSpy;

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = mount(
      <Provider store={store}>
        <Login />
      </Provider>,
    );
    loginUserSpy = jest
      .spyOn(userService, 'loginUser')
      .mockReturnValue(Promise.resolve(mockUser));
  });

  it('should render login component', () => {
    const loginPage = wrapper.find(Login);
    expect(loginPage.exists()).toBe(true);
  });

  it('should dispatch setLoggedInUser on click of ', () => {
    loginUserSpy.mockReturnValue(Promise.resolve(mockUser));
    const emailText = wrapper.find('input[name="email"]');
    act(() => {
      emailText
        .props()
        .onChange({ target: { name: 'email', value: 'chirag@email.com' } });
    });
    const passwordText = wrapper.find('input[name="password"]');
    act(() => {
      passwordText
        .props()
        .onChange({ target: { name: 'password', value: 'abc' } });
    });
    const loginBtn = wrapper.find('input[name="loginBtn"]');
    loginBtn.props().onClick();
    expect(loginUserSpy).toHaveBeenCalled();
  });
});
