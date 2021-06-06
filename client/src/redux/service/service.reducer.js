import { SET_ALL_SERVICES } from '../../constants';

const INITIAL_STATE = {
  services: [],
};

const serviceReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ALL_SERVICES: {
      return {
        ...state,
        services: action.services,
      };
    }
    default:
      return state;
  }
};

export default serviceReducer;
