import { ConfigurationContext } from '@ctx/config';
import React, { FC, useContext, useState } from 'react';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { AiFillEye } from 'react-icons/ai';
import movieStorage from '@services/storage/movie.storage';
import { toast } from 'react-hot-toast';
import { MovieCardProps } from './props';
import { useMemo } from 'react';
import { useEffect } from 'react';

const MovieCardSkeleton: FC = () => (
    <div className="flip-card h-80 w-52">
        <div className="flip-card-inner">
            <div className="flip-card-front bg-primary">
                <div className="w-full h-12 absolute bottom-0 left-0 bg-neutral" />
            </div>
            <div className="flip-card-back bg-secondary" />
        </div>
    </div>
);

const MovieCard: FC<MovieCardProps> = ({ movie }) => {
    const searchId = useMemo(() => movie.id, [movie]);
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        setIsFavorite(movieStorage.isFavorite(searchId));
    }, [movie]);

    const { images } = useContext(ConfigurationContext)!;

    if (images === undefined) return <MovieCardSkeleton />;

    const imgSrc = `${images?.base_url}${images?.backdrop_sizes[1]}/${movie.backdrop_path}`;

    const handleFavoriteBtn = () => {
        const newFav = movieStorage.toggleFavorite(movie.id);
        setIsFavorite(newFav);

        if (newFav) {
            toast.success(`Added ${movie.title} to favorites`, {
                id: 'movie-added',
            });
        } else {
            toast.error(`Removed ${movie.title} from favorites`, {
                id: 'movie-removed',
            });
        }
    };

    return (
        <div className="flip-card h-80 w-full md:w-52">
            <div className="absolute z-10 -top-2 -right-2 center-col-xy gap-y-2">
                <button
                    onClick={handleFavoriteBtn}
                    type="button"
                    className="bg-white rounded-full p-2 text-primary with-trans quick hover:scale-110"
                >
                    { isFavorite ? <MdFavorite /> : <MdFavoriteBorder />}
                </button>
                <a
                    className="bg-white rounded-full p-2 text-primary with-trans quick hover:scale-110"
                    href={`/details/${movie.id}`}
                >
                    <AiFillEye className="scale-110" />
                </a>
            </div>
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={imgSrc} alt={movie.title} className="object-cover w-full h-4/5" />
                    <div className="bg-secondary h-1/5 py-2 text-white">
                        <h1 className="font-medium">{movie.title}</h1>
                        <h2 className="badge badge-primary font-medium">{movie.release_date}</h2>
                    </div>
                </div>
                <div className="flip-card-back bg-primary text-sm space-y-2">
                    <div className="h-4/5 p-3">
                        <h1 className="font-bold text-lg">Overview</h1>
                        <p className="h-4/5 overflow-y-auto">
                            {movie.overview}
                        </p>
                    </div>
                    <div className="h-1/5 bg-secondary center-row-y justify-around">
                        <span className="badge badge-accent font-medium">
                            Rating:
                            {' '}
                            {movie.vote_average}
                        </span>
                        <span className="badge badge-accent font-medium">
                            Votes:
                            {' '}
                            {movie.vote_count}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
