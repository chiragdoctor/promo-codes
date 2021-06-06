import axios from 'axios';
import { SERVER_ADDR } from '../constants';
const user = JSON.parse(localStorage.getItem('user'));

export const addBonus = params => {
  return axios
    .post(`${SERVER_ADDR}/activateBonus`, params, {
      headers: {
        'Authorization': `Bearer ${user.token}`,
      },
    })
    .then(({ data }) => {
      return data;
    })
    .catch(error => {
      throw error;
    });
};

export const getActivateBonusForUser = () => {
  return axios
    .get(`${SERVER_ADDR}/activateBonus/id/${user.id}`, {
      headers: {
        'Authorization': `Bearer ${user.token}`,
      },
    })
    .then(({ data }) => {
      return data;
    })
    .catch(error => {
      throw error;
    });
};
