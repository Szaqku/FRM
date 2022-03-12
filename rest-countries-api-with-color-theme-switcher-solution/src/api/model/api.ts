import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {Country} from "./Country";

export const countriesApi = createApi({
    reducerPath: 'countriesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `https://restcountries.com/v2/`
    }),
    endpoints: (builder) => ({
        getAllCountries: builder.query<Country[], void>({
            query: () => `all?fields=name,region,subregion,capital,population,currencies,languages,tld,borders,alpha3Code,flags,nativeName,topLevelDomain`
        })
    })
})

export const { useGetAllCountriesQuery } = countriesApi;
