import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ServiceList from './ServiceList';
import Service from './Service';
import * as service from '../services/service';
import * as bonus from '../services/bonus';

describe('ServiceList Component', () => {
  let wrapper;
  let getAllServicesSpy = jest.fn();
  let getActivateBonusForUserSpy = jest.fn();
  let addBonusSpy = jest.fn();
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
        {
          id: 1,
          name: 'abc',
          description: 'this is desc',
          promo_code: 'promocode',
        },
        {
          id: 2,
          name: 'efg',
          description: 'this is desc',
          promo_code: 'promocode',
        },
        {
          id: 3,
          name: 'xyz',
          description: 'this is desc',
          promo_code: 'promocode',
        },
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
    addBonusSpy = jest
      .spyOn(bonus, 'addBonus')
      .mockReturnValue(Promise.resolve({}));
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

  it('should call getAllServices at initial render', () => {
    expect(getAllServicesSpy).toHaveBeenCalled();
  });

  it('should call getActivateBonusForUser at initial render', () => {
    expect(getActivateBonusForUserSpy).toHaveBeenCalled();
  });

  it('should call addBonus on click of ActivateBonus clicked', () => {
    const service = wrapper.find(Service).first();
    act(() => {
      service.props().handleActiveBonusClick(1);
    });
    expect(addBonusSpy).toHaveBeenCalled();
    expect(getActivateBonusForUserSpy).toHaveBeenCalled();
  });
});
