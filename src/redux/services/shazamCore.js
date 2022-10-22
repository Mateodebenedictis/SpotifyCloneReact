import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '461c744115mshda57a41821044c0p12843fjsn9b6f4137494e');

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/world' }),
    }),
});
    
export const { useGetTopChartsQuery } = shazamCoreApi;


