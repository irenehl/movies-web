import { MovieApiConfig } from '@models/movie.model';
import { getApiConfig } from '@services/movies.service';
import { useQuery } from '@tanstack/react-query';
import React, {
    useMemo, FC, PropsWithChildren, createContext,
} from 'react';

export const ConfigurationContext = createContext<MovieApiConfig | undefined>(undefined);

const ConfigurationContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const { data: config } = useQuery(['global-config'], getApiConfig);

    const valueToProvide = useMemo(() => ({
        ...(config?.data ?? {}),
    }), [config]);

    return (
        <ConfigurationContext.Provider value={valueToProvide}>
            {children}
        </ConfigurationContext.Provider>
    );
};

export default ConfigurationContextProvider;
