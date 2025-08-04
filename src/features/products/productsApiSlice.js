import { apiSlice } from "../../app/api/apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getProducts: builder.query({
            query: () => '/api/product',
            providesTags: (result, error, arg) => [
                { type: 'Product', id: 'LIST' },
                ...result.map(product => ({ type: 'Product', id: product._id }))
            ]
        }),
        getProductById: builder.query({
            query: (id) => `/api/product/${id}`,
            providesTags: (result, error, id) => [{ type: 'Product', id }]
        }),
    }),
});

export const {
    useGetProductsQuery,
    useGetProductByIdQuery,
} = productsApiSlice;
