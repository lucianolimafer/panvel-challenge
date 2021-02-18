import axios from 'axios';

const api = axios.create({
  baseURL: `http://newsapi.org/v2/everything?q=apple&from=2021-02-17&to=2021-02-17&sortBy=popularity&apiKey=c03f1b55c0f045d88a5ac416f60a03b1`,
});

export default api;
