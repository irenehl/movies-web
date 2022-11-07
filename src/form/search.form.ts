import { SearchModel } from '@models/search.model';
import * as yup from 'yup';

export const schema = yup.object().shape({
    query: yup.string().min(3, 'Let\'s look for a longer movie title').required('Movie title is required'),
});

export const defaultValues: SearchModel = {
    query: '',
};
