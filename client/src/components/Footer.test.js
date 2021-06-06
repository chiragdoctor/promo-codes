import React from 'react';
import { mount } from 'enzyme';
import Footer from './Footer';

describe('Filter Component', () => {
  let wrapper;
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = mount(<Footer />);
  });

  it('should render footer component', () => {
    const footer = wrapper.find(Footer);
    expect(footer.exists()).toBe(true);
  });

  it('should render footer contents', () => {
    const content = wrapper.find('.content');
    expect(content.exists()).toBe(true);
    expect(content.text()).toEqual('© IT Promocodes, 2019');
  });
});
