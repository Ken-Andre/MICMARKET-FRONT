import axios from 'axios';

const baseURL = 'localhost:5000/api/user/register';

function axf() {
  return axios.create({ baseURL });
}

export default axf;
