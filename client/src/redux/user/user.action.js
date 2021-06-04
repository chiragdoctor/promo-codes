import { SET_USER } from '../../constants';

export const setLoggedInUser = user => {
  return {
    type: SET_USER,
    user,
  };
};
