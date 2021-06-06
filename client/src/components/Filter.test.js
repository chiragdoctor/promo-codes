import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Filter from './Filter';
import * as service from '../services/service';

describe('Filter Component', () => {
  let wrapper;
  let getAllServicesSpy = jest.fn();
  let getServicesByNameSpy = jest.fn();
  const mockServices = [
    { name: 'abc', description: 'this is desc', promo_code: 'promocode' },
    { name: 'efg', description: 'this is desc', promo_code: 'promocode' },
    { name: 'xyz', description: 'this is desc', promo_code: 'promocode' },
  ];
  let store;
  let initialState = {
    users: {
      user: {
        username: 'abc',
      },
    },
    services: {
      services: [
        { name: 'abc', description: 'this is desc', promo_code: 'promocode' },
        { name: 'efg', description: 'this is desc', promo_code: 'promocode' },
        { name: 'xyz', description: 'this is desc', promo_code: 'promocode' },
      ],
    },
  };
  const mockStore = configureStore([thunk]);
  store = mockStore(initialState);
  store.dispatch = jest.fn();
  beforeEach(() => {
    jest.clearAllMocks();
    getAllServicesSpy = jest
      .spyOn(service, 'getAllServices')
      .mockReturnValue(Promise.resolve(mockServices));
    getServicesByNameSpy = jest
      .spyOn(service, 'getServicesByName')
      .mockReturnValue(Promise.resolve(mockServices));
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
    expect(input.props().value).toBe('');
  });

  it('should render button to reset filter', () => {
    const resetBtn = wrapper.find('button[name="reset"]');
    expect(resetBtn.exists()).toBe(true);
  });

  it('should call getAllServices on reset button clicked', () => {
    const resetBtn = wrapper.find('button[name="reset"]');
    resetBtn.props().onClick();
    expect(getAllServicesSpy).toHaveBeenCalled();
  });

  it('should input change it should call getServicesByName', () => {
    getServicesByNameSpy.mockReturnValue(Promise.resolve(mockServices));
    const input = wrapper.find('input[name="filter"]');
    act(() => {
      input.props().onChange({ target: { value: 'abc' } });
    });
    expect(getServicesByNameSpy).toHaveBeenCalledWith('abc');
  });
});
