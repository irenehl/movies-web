import { MovieApiConfig, PopularMovieResponse } from '@models/movie.model';
import { PaginationModel } from '@models/pagination.model';
import { authInstance } from './http.service';

const moviesInstance = authInstance(import.meta.env.VITE_MOVIES_API_URL);

export const getApiConfig = () => moviesInstance.get<MovieApiConfig>('/configuration');

export const getPopular = (paging: PaginationModel) => moviesInstance.get<PopularMovieResponse>('/movie/popular', {
    params: paging,
});
