import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Country, DetailQueryParams, FilterQueryParams, SearchQueryParams } from '../utils/types';

export const countryApi = createApi({
    reducerPath: "countryApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://restcountries.com/v3.1/" }),
    endpoints: (builder) => ({
        getCountries: builder.query<Country[], string>({
            query: (fields)=> `all/?fields=${fields}`
        }),
        searchCountriesByName: builder.query<Country[], SearchQueryParams>({
            query: (queryParams) => {
                const { searchText, fields } = queryParams
                return `name/${searchText}/?fields=${fields}`
            } 
        }),
        filterCountriesByRegion: builder.query<Country[], FilterQueryParams>({
            query: (queryParams) => {
                const { filterText, fields } = queryParams
                return `region/${filterText}/?fields=${fields}`
            } 
        }),
        getCountryDetailByName: builder.query<Country[], DetailQueryParams>({
            query: (queryParams) => {
                const { name, fields } = queryParams
                return `name/${name}/?fullText=true&fields=${fields}`
            } 
        }),
    })
})


export const { useGetCountriesQuery, useLazySearchCountriesByNameQuery, useLazyFilterCountriesByRegionQuery, useGetCountryDetailByNameQuery } = countryApi