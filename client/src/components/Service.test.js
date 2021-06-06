import React from 'react';
import { mount } from 'enzyme';
import Service from './Service';
import Copy from './Copy';

describe('Service Component', () => {
  let wrapper;
  const mockService = {
    name: 'AppVision.com',
    description: 'this is description',
    promo_code: 'itpromocode',
  };
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = mount(<Service service={mockService} />);
  });

  it('should render service component', () => {
    const service = wrapper.find(Service);
    expect(service.exists()).toBe(true);
  });

  it('should render service title', () => {
    const title = wrapper.find('.service-title');
    expect(title.exists()).toBe(true);
    expect(title.text()).toBe(mockService.name);
  });

  it('should render service description', () => {
    const desc = wrapper.find('.service-description');
    expect(desc.exists()).toBe(true);
    expect(desc.text()).toBe(mockService.description);
  });

  it('should render input for displaying promocode', () => {
    const input = wrapper.find('input[name="promocode"]');
    expect(input.exists()).toBe(true);
    expect(input.props().value).toBe(mockService.promo_code);
  });

  it('should render copy button to copy promocode', () => {
    const copy = wrapper.find(Copy);
    expect(copy.exists()).toBe(true);
  });

  it('should render button to activate bonus', () => {
    const btn = wrapper.find('.activate-bonus');
    expect(btn.exists()).toBe(true);
    expect(btn.text()).toEqual('Activate bonus');
  });
});
