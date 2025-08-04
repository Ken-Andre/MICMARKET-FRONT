import { apiSlice } from "../../app/api/apiSlice";

export const startupsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getStartups: builder.query({
            query: () => '/api/startup',
            providesTags: (result, error, arg) => [
                { type: 'Startup', id: 'LIST' },
                ...result.map(startup => ({ type: 'Startup', id: startup._id }))
            ]
        }),
        getStartupById: builder.query({
            query: (id) => `/api/startup/${id}`,
            providesTags: (result, error, id) => [{ type: 'Startup', id }]
        }),
        createStartup: builder.mutation({
            query: (newStartup) => ({
                url: '/api/startup',
                method: 'POST',
                body: newStartup,
            }),
            invalidatesTags: [{ type: 'Startup', id: 'LIST' }]
        }),
        updateStartup: builder.mutation({
            query: ({ id, ...updatedStartup }) => ({
                url: `/api/startup/${id}`,
                method: 'PUT',
                body: updatedStartup,
            }),
            invalidatesTags: (result, error, { id }) => [{ type: 'Startup', id }, { type: 'Startup', id: 'LIST' }]
        }),
        deleteStartup: builder.mutation({
            query: (id) => ({
                url: `/api/startup/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: (result, error, id) => [{ type: 'Startup', id }, { type: 'Startup', id: 'LIST' }]
        }),
        rateStartup: builder.mutation({
            query: ({ id, ...ratingData }) => ({
                url: `/api/startup/rating`,
                method: 'PUT',
                body: { prodId: id, ...ratingData }
            }),
            invalidatesTags: (result, error, { id }) => [{ type: 'Startup', id }, { type: 'Startup', id: 'LIST' }]
        }),
    }),
});

export const {
    useGetStartupsQuery,
    useGetStartupByIdQuery,
    useCreateStartupMutation,
    useUpdateStartupMutation,
    useDeleteStartupMutation,
    useRateStartupMutation,
} = startupsApiSlice;
