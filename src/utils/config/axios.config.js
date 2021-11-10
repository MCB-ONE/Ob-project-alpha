import axios from 'axios';

// Default config for axios
// TODO change configuration to our jobs API
export default axios.create(
    {
       baseURL: 'https://backend-proyect-alpha.herokuapp.com/api',
       responseType: 'json',
       timeout: 6000,
    },
);
