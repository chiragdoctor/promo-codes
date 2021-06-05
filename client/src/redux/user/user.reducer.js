import { SET_USER } from '../../constants';

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem('user')),
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER: {
      localStorage.setItem('user', JSON.stringify(action.user));
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
