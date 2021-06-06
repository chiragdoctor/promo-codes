import { SET_ALL_SERVICES } from '../../constants';

export const setAllServices = services => {
  return {
    type: SET_ALL_SERVICES,
    services,
  };
};
