import { ConfigurationContext } from '@ctx/config';
import React, { FC, useContext } from 'react';
import { MovieCardProps } from './props';

const MovieCardSkeleton: FC = () => (
    <div className="flip-card h-80 w-52">
        <div className="flip-card-inner">
            <div className="flip-card-front bg-primary">
                <div className="w-full h-12 absolute bottom-0 left-0 bg-neutral" />
            </div>
            <div className="flip-card-back bg-secondary">
                
            </div>
        </div>
    </div>
);

const MovieCard: FC<MovieCardProps> = ({ movie }) => {
    const { images } = useContext(ConfigurationContext)!;

    if (images === undefined) return <MovieCardSkeleton />;

    const imgSrc = `${images?.base_url}${images?.backdrop_sizes[1]}/${movie.backdrop_path}`;

    return (
        <div className="flip-card h-80 w-full md:w-52">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={imgSrc} alt={movie.title} className="object-cover w-full h-4/5" />
                    <div className="bg-primary h-1/5 py-2 text-white">
                        <h1 className="font-medium">{movie.title}</h1>
                        <h2 className="badge badge-secondary font-medium badge-sm">{movie.release_date}</h2>
                    </div>
                </div>
                <div className="flip-card-back bg-primary p-4">
                    {movie.overview}
                </div>
            </div>
        </div>
    );
}

export default MovieCard;
