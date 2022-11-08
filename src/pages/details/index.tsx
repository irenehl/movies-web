import Layout from '@components/layout';
import { getCredits, getDetails, getRelatedMovies } from '@services/movies.service';
import { useQueries, useQuery } from '@tanstack/react-query';
import React, { FC } from 'react';
import { useLocation, useParams } from 'react-router-dom';

const Details: FC = () => {
    const location = useParams();
    const { data: movieDetails } = useQuery(['details', location.id], () => getDetails(+location.id!));
    const { data: relatedMovies } = useQuery(['related', location.id], () => getRelatedMovies(+location.id!));
    const { data: cast } = useQuery(['cast', location.id], () => getCredits(+location.id!));

    console.log(movieDetails?.data);

    return (
        <Layout>
            ola
        </Layout>
    );
};

export default Details;
