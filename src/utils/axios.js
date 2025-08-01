import axios from 'axios';

const baseURLAPI = process.env.REACT_APP_API_BASE_URL;

export function axf() {
  return axios.create({ baseURLAPI });
}
export const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export const getPosts = async () => {
    const response = await api.get('/posts')
    return response.data
}
//export default axf;
