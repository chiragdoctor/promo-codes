import axios from 'axios';
import { SERVER_ADDR } from '../constants';

export const loginUser = params => {
  return axios
    .post(`${SERVER_ADDR}/users/login`, params)
    .then(({ data }) => {
      return data;
    })
    .catch(error => {
      throw error;
    });
};
