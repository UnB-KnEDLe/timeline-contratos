import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:5015/acts',
});

export default api;
