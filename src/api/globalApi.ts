import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://moviesverse1.p.rapidapi.com',
  withCredentials: true, // This attaches cookies (e.g., refresh token) to the request
  headers: {
    'x-rapidapi-host': 'moviesverse1.p.rapidapi.com',
    'x-rapidapi-key': 'a5f2e159a5mshe67d50cc064059fp160142jsnbf598eb1ed95',
  },
  timeout: 60000,
  timeoutErrorMessage: 'Request timed out. please try again',
});

axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;

    return Promise.reject(error);
    // return err;
  },
);
