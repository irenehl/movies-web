import { LoginModel, LoginResponseModel } from '@models/login.model';
import { createInstance } from './http.service';

const loginInstance = createInstance(import.meta.env.VITE_AUTH_API_URL);

export const login = (data: LoginModel) => loginInstance.post<LoginResponseModel>('/login', data);
