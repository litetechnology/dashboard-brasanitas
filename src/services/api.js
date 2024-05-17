import axios from 'axios';
import https from 'https'; 

import config from '../assets/config';

var token = localStorage.getItem('token');

const httpsAgent = new https.Agent({  
  rejectUnauthorized: false
});

const api = axios.create({
  baseURL: config.production ? config.baseURL : config.baseURL_test,
  headers: {
    'Content-Type': 'application/json',
    'authorization': token
  },
  httpsAgent: httpsAgent 
});

export default api;
