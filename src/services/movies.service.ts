import { MovieApiConfig, MovieOverviewModel, PaginatedMovieResponse } from '@models/movie.model';
import { PaginationModel } from '@models/pagination.model';
import { authInstance } from './http.service';

const moviesInstance = authInstance(import.meta.env.VITE_MOVIES_API_URL);

export const getApiConfig = () => moviesInstance.get<MovieApiConfig>('/configuration');

export const getPopular = (paging: PaginationModel) => moviesInstance.get<PaginatedMovieResponse>('/movie/popular', {
    params: paging,
});

export const searchMovies = (paging: PaginationModel, query?: string) => {
    const url = query !== undefined && query !== '' ? '/search/movie' : '/movie/popular';

    return moviesInstance.get<PaginatedMovieResponse>(url, {
        params: {
            ...paging,
            ...((query !== undefined && query !== '') ? { query } : {}),
        },
    });
};

export const getDetails = (movieId: number) => moviesInstance.get<MovieOverviewModel>(`/movie/${movieId}`);

export const getRelatedMovies = (movieId: number) => moviesInstance.get<PaginatedMovieResponse>(`/movie/${movieId}/recommendations`);

export const getCredits = (movieId: number) => moviesInstance.get<PaginatedMovieResponse>(`/movie/${movieId}/credits`);
