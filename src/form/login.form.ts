import { LoginModel } from '@models/login.model';
import * as yup from 'yup';

export const schema = yup.object().shape({
    email: yup.string().email('Text should be a valid email').required('Email is required'),
    password: yup.string().min(4, 'Password should be at least 4 characters').required('Password is required'),
});

export const defaultValues: LoginModel = {
    email: '',
    password: '',
};
