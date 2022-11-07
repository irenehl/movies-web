import axios from 'axios';

export const createInstance = (baseURL: string) => {
    const instance = axios.create({
        baseURL,
    });

    return instance;
};

export const authInstance = (baseURL: string) => {
    const instance = createInstance(baseURL);

    instance.interceptors.request.use((req) => ({
        ...req,
        params: {
            ...req.params,
            api_key: import.meta.env.VITE_MOVIES_API_KEY,
        },
    }));

    return instance;
};
