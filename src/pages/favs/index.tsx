import { MovieCard } from '@components/cards';
import Header from '@components/common/Header';
import Layout from '@components/layout';
import ConfigurationContextProvider from '@ctx/config';
import { MovieOverviewModel } from '@models/movie.model';
import { getDetails } from '@services/movies.service';
import movieStorage from '@services/storage/movie.storage';
import { useQueries } from '@tanstack/react-query';
import React, { FC } from 'react';

const Favs: FC = () => {
    const favMovies = movieStorage.getFavorite();
    const results = useQueries({
        queries: favMovies.map((movieId) => ({
            queryKey: ['movie', movieId],
            queryFn: () => getDetails(movieId),
            staleTime: Infinity,
        })),
    });

    const movies = results ? results.map(
        (res) => res.data?.data,
    ) : [];

    console.log(movies);

    return (
        <ConfigurationContextProvider>
            <Layout>
                <Header title="My favorite movies ❤️" subtitle="Here are all the movies you consider worthy" />
                <section className="flex flex-row flex-wrap justify-between mt-10">
                    { results && movies && movies.length > 0 ? (
                        movies.map((mov) => (mov ? <MovieCard movie={mov} /> : null))
                    ) : null }
                </section>
            </Layout>
        </ConfigurationContextProvider>
    );
};

export default Favs;
