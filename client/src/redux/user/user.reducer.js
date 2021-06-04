import { SET_USER } from '../../constants';

const INITIAL_STATE = {
  user: {
    token: localStorage.getItem('token'),
  },
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER: {
      localStorage.setItem('token', action.user.token);
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
