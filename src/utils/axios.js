import axios from 'axios';

const baseURL = 'localhost:5000/api/user/';

function axf() {
  return axios.create({ baseURL });
}

export default axf;
