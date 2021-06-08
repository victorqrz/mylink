import axios from 'axios';

export const key = '7514a45494418a80e525e1e7bd837b911bc08d63';

const api = axios.create({
  baseURL: 'https://api-ssl.bitly.com/v4',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${key}`
  }
});

export default api;