import axios from 'axios';

const apiBaseUrl = process.env.REACT_APP_API_URL;

export function axf() {
  return axios.create({ 
    baseURL: micmarketApiUrl 
  });
}
export const api = axios.create({
    baseURL: process.env.REACT_APP_POSTS_API_URL
})

export const getPosts = async () => {
    const response = await api.get('/posts')
    return response.data
}
//export default axf;
