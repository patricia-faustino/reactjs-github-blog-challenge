import axios from 'axios';

const createAPI = async () => {
  return axios.create({
    baseURL: 'https://api.github.com',
  });
};

export const api = await createAPI();
