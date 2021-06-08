import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.18.0.3:5000/acts',
});

export default api;
