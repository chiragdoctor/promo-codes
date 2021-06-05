import React from 'react';
import { mount } from 'enzyme';
import Sidebar from './Sidebar';
import Logo from './Logo';
import Circle from './Circle';

describe('Sidebar Component', () => {
  let wrapper;

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = mount(<Sidebar />);
  });

  it('should render sidebar component', () => {
    const sidebar = wrapper.find(Sidebar);
    expect(sidebar.exists()).toBe(true);
  });

  it('should render logo ', () => {
    const logo = wrapper.find(Logo);
    expect(logo.exists()).toBe(true);
  });

  it('should render 8 circles', () => {
    const circles = wrapper.find(Circle);
    expect(circles.exists()).toBe(true);
    expect(circles).toHaveLength(8);
  });
});
