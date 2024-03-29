import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Dashboard from './Dashboard';
import Filter from './Filter';
import ServiceList from './ServiceList';
import * as service from '../services/service';
import * as bonus from '../services/bonus';

describe('Dashboard Component', () => {
  let wrapper;
  let getAllServicesSpy = jest.fn();
  let getActivateBonusForUserSpy = jest.fn();
  const mockServices = [
    { name: 'abc', description: 'this is desc', promo_code: 'promocode' },
    { name: 'efg', description: 'this is desc', promo_code: 'promocode' },
    { name: 'xyz', description: 'this is desc', promo_code: 'promocode' },
  ];
  const mockBonus = [
    { userId: '1', serviceId: '1' },
    { userId: '1', serviceId: '2' },
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
    getActivateBonusForUserSpy = jest
      .spyOn(bonus, 'getActivateBonusForUser')
      .mockReturnValue(Promise.resolve(mockBonus));
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
