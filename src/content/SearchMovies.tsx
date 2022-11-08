import { MovieCard } from '@components/cards';
import { searchMovies } from '@services/movies.service';
import { useQuery } from '@tanstack/react-query';
import React, { FC, useId, useState } from 'react';
import { BiChevronsLeft, BiChevronsRight } from 'react-icons/bi';
import { SearchMoviesProps } from './props';

const SearchMovies: FC<SearchMoviesProps> = ({ query }) => {
    const id = useId();
    const [paging, setPaging] = useState(1);
    const { data: popular } = useQuery(['search-movies', query], () => searchMovies({ page: paging }, query), {
        retryOnMount: true,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    });
    const movies = (popular !== undefined && popular.data && popular.data.results.length) > 0
        ? popular!.data.results : [];

    const handleNavigate = (increment: number) => {
        if (paging + increment < 1) setPaging(1);
        else if (paging + increment > (popular?.data.total_pages ?? 999)) {
            setPaging(popular?.data.total_pages ?? 999);
        } else {
            setPaging(paging + increment);
        }
    };

    return (
        <section className="flex flex-row justify-between flex-wrap gap-10">
            { movies.map((movie, idx) => <MovieCard key={`${id}-${idx}`} movie={movie} />) }
            <div className="w-full center-row-y mb-10 justify-between">
                <button
                    onClick={() => handleNavigate(-1)}
                    className="btn btn-primary text-3xl font-medium"
                    type="button"
                >
                    <BiChevronsLeft />

                </button>
                <button
                    onClick={() => handleNavigate(1)}
                    className="btn btn-primary text-3xl font-medium"
                    type="button"
                >
                    <BiChevronsRight />
                </button>
            </div>
        </section>
    );
};

export default SearchMovies;
