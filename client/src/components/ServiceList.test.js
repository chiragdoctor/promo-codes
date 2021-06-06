import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ServiceList from './ServiceList';
import Service from './Service';
import * as service from '../services/service';

describe('ServiceList Component', () => {
  let wrapper;
  let getAllServicesSpy = jest.fn();
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

  it('should render 3 service component at initial render', () => {
    const service = wrapper.find(Service);
    expect(service).toHaveLength(3);
  });
});
