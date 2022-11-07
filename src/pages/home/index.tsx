import { MovieCard } from '@components/cards';
import Header from '@components/common/Header';
import TextInput from '@components/inputs/TextInput';
import Layout from '@components/layout';
import ConfigurationContextProvider from '@ctx/config';
import { schema, defaultValues } from '@form/search.form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SearchModel } from '@models/search.model';
import { getPopular } from '@services/movies.service';
import { useQueries, useQuery } from '@tanstack/react-query';
import React, { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { FiSearch } from 'react-icons/fi';

const Home: FC = () => {
    const [paging, setPaging] = useState(5);
    const { data: popular } = useQuery(['popular-movies', paging], () => getPopular({ page: paging }));
    const { register, handleSubmit, formState } = useForm<SearchModel>({
        resolver: yupResolver(schema),
        defaultValues,
    });

    const onSubmit = async (data: SearchModel) => {

    };

    useEffect(() => {
        toast('Hover over a movie to see its details', {
            icon: '👆',
            id: 'movie-text',
            duration: 6000,
        }, []);
    });

    useEffect(() => console.log(popular), [popular]);

    return (
        <Layout>
            <ConfigurationContextProvider>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Header title="Welcome to MoviesWeb" subtitle="Let's search a new movie! 🎥" />
                    <div className="flex flex-col gap-x-2 items-center
                lg:flex-row"
                    >
                        <TextInput
                            label="Title"
                            inputProps={register('query')}
                            placeholder="Avatar"
                            type="text"
                            errors={formState.errors.query?.message}
                        />
                        <button
                            type="submit"
                            className="w-full btn btn-primary
                        lg:w-auto
                        lg:mt-5"
                        >
                            Search
                            <FiSearch className="ml-2 w-4 h-4" />
                        </button>
                    </div>
                </form>
                <section className="center-row-y flex-wrap gap-10">
                    {popular && popular.data.results.length > 0 ? (
                        popular.data.results.map((movie) => <MovieCard movie={movie} />)
                    ) : null }
                </section>
            </ConfigurationContextProvider>
        </Layout>
    );
};

export default Home;
