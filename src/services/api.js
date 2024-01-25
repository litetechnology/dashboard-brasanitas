import axios from 'axios';

import config from '../assets/config';

var token = localStorage.getItem('token');

const api = axios.create({
  baseURL: config.production ? config.baseURL : config.baseURL_test,
  headers: {
    'Content-Type': 'application/json',
    'authorization': token
  }
});

export default api;