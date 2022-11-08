/* eslint-disable jsx-a11y/control-has-associated-label */
import Header from '@components/common/Header';
import TextInput from '@components/inputs/TextInput';
import Layout from '@components/layout';
import ConfigurationContextProvider from '@ctx/config';
import { schema, defaultValues } from '@form/search.form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SearchModel } from '@models/search.model';
import React, {
    FC, useEffect, useState,
} from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { FiSearch } from 'react-icons/fi';
import { FaTimes } from 'react-icons/fa';
import { SearchMovies } from 'content';

const Home: FC = () => {
    const [query, setQuery] = useState('');
    const {
        register, handleSubmit, formState, reset,
    } = useForm<SearchModel>({
        resolver: yupResolver(schema),
        defaultValues,
    });

    const onSubmit = async (data: SearchModel) => {
        setQuery(data.query);
    };

    useEffect(() => {
        toast('Hover over a movie to see its details', {
            icon: '👆',
            id: 'movie-text',
            duration: 6000,
        });
    }, []);

    return (
        <Layout>
            <ConfigurationContextProvider>
                <form className="sticky mb-10" onSubmit={handleSubmit(onSubmit)}>
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
                    <div>
                        { query !== '' ? (
                            <div className="badge badge-info gap-2 center-row-y hover:scale-125">
                                {query}
                                <button
                                    type="button"
                                    onClick={() => {
                                        setQuery('');
                                        reset();
                                    }}
                                >
                                    <FaTimes />
                                </button>
                            </div>
                        ) : null}
                    </div>
                </form>
                <SearchMovies query={query} />
            </ConfigurationContextProvider>
        </Layout>
    );
};

export default Home;
