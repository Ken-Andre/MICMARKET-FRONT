import axios from 'axios';

const baseURL = 'https://eoniy1qondyec20.m.pipedream.net';

function axf() {
  return axios.create({ baseURL });
}

export default axf;
