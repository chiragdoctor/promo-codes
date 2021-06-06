import axios from 'axios';
import { SERVER_ADDR } from '../constants';
const user = JSON.parse(localStorage.getItem('user'));

export const getAllServices = () => {
  return axios
    .get(`${SERVER_ADDR}/services`, {
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
