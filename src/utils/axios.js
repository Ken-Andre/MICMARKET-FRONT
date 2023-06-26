import axios from 'axios';

const baseURLAPI = 'localhost:5000/';

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
