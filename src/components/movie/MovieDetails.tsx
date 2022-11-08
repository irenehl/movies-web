import { ConfigurationContext } from '@ctx/config';
import { getDetails, getRelatedMovies, getCredits } from '@services/movies.service';
import { useQuery } from '@tanstack/react-query';
import React, { FC, useContext, useId } from 'react';
import { useParams } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { MovieCard } from '@components/cards';

const MovieDetails: FC = () => {
    const id = useId();
    const location = useParams();
    const { data: movieDetails } = useQuery(['details', location.id], () => getDetails(+location.id!));
    const { data: relatedMovies } = useQuery(['related', location.id], () => getRelatedMovies(+location.id!));
    const { data: cast } = useQuery(['cast', location.id], () => getCredits(+location.id!));

    const { images } = useContext(ConfigurationContext)!;

    const imgSrc = `${images?.base_url}${images?.backdrop_sizes[1]}/${movieDetails?.data.poster_path}`;

    return (
        <div className="space-y-3 md:space-y-8">
            <h1 className="py-5 text-2xl font-medium">{movieDetails?.data.title}</h1>
            <h2 className="badge badge-primary font-medium">{movieDetails?.data.release_date}</h2>
            <img src={imgSrc} alt={movieDetails?.data.title} className="object-cover rounded-br-xl md:h-[5%] xl:h-[7%]" />
            <h2 className="badge badge-primary font-medium">Actors</h2>
            <ul className="space-y-4 flex flex-col justify-center md:flex-row md:flex-wrap md:justify-between">
                {cast?.data.cast.map((act, idx) => (
                    <li key={`${id}-${idx}`} className="h-1/2 p-2 border-b-2 flex flex-row items-center justify-between md:w-[45%]">
                        {
                            act.profile_path !== null ? (
                                <img
                                    src={`${images?.base_url}${images?.backdrop_sizes[1]}/${act?.profile_path}`}
                                    alt={act.name}
                                    className="rounded-full w-12 h-12 object-cover"
                                />
                            )
                                : (
                                    <div className="rounded-full w-12 h-12 object-cover bg-white flex items-center justify-center text-xl">
                                        <FaUserAlt />
                                    </div>
                                )
                        }

                        <div className="w-2/3 text-end">
                            {' '}
                            {`${act.name} as`}
                            {' '}
                            <span className="italic">{act.character}</span>
                        </div>
                    </li>
                ))}
            </ul>
            <h2 className="badge badge-primary font-medium">Related movies</h2>
            <div className="w-full md:flex md:flex-wrap md:justify-around">
                { relatedMovies?.data.results.map((movie, idx) => <MovieCard key={`${id}-${idx}`} movie={movie} />) }
            </div>
        </div>
    );
};

export default MovieDetails;
