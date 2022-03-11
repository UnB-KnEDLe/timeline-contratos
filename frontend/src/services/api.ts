import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://ailab.unb.br/api/timeline/acts',
  // baseURL: 'http://0.0.0.0:5015/acts',
});

export default api;
