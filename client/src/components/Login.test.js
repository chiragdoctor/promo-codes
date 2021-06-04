import React from 'react';
import { mount } from 'enzyme';
import Login from './Login';

describe('App Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Login />);
  });

  it('should render login component', () => {
    const loginPage = wrapper.find(Login);
    expect(loginPage.exists()).toBe(true);
  });
});
