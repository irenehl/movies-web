export interface MovieApiConfig {
    images?: ImagesModel;
    change_keys?: string[];
}

export interface ImagesModel {
    base_url: string;
    secure_base_url: string;
    backdrop_sizes: string[];
    logo_sizes: string[];
    poster_sizes: string[];
    profile_sizes: string[];
    still_sizes: string[];
}

export interface PopularMovieResponse {
    page: number;
    results: MovieOverviewModel[];
    total_results: number;
    total_pages: number;
}

export interface MovieOverviewModel {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}
