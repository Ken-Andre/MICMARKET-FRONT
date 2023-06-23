import axios from 'axios';

const baseURL = 'localhost:5000/';

function axf() {
  return axios.create({ baseURL });
}

export default axf;
