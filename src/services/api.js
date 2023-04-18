// json-server --watch -d 180 --host 192.168.1.2 db.json
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.15.88:3000/',
})

export default api;
