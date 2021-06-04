import { SET_USER } from '../../constants';

const INITIAL_STATE = {
  user: {},
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        user: { ...action.user, isAuthenticated: true },
      };
    }
    default:
      return state;
  }
};

export default userReducer;
