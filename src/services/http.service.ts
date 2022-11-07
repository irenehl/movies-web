import axios from 'axios';

export const createInstance = (baseURL: string) => axios.create({
    baseURL,
}).interceptors.response.use((res) => ({ ...res.data, status: res.status }));
