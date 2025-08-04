import { apiSlice } from "../../app/api/apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUser: builder.query({
            query: (id) => `/api/user/${id}`,
            providesTags: (result, error, id) => [{ type: 'User', id }]
        }),
        updateUser: builder.mutation({
            query: (userData) => ({
                url: '/api/user/edit-user',
                method: 'PUT',
                body: userData,
            }),
            invalidatesTags: (result, error, { _id }) => [{ type: 'User', id: _id }]
        }),
        getUserCart: builder.query({
            query: () => '/api/user/cart',
            providesTags: ['Cart']
        }),
        addToCart: builder.mutation({
            query: (cartData) => ({
                url: '/api/user/cart',
                method: 'POST',
                body: cartData,
            }),
            invalidatesTags: ['Cart']
        }),
        createOrder: builder.mutation({
            query: (orderData) => ({
                url: '/api/user/cart/cash-order',
                method: 'POST',
                body: orderData,
            }),
            invalidatesTags: ['Cart', 'Order']
        }),
        getUserOrders: builder.query({
            query: () => '/api/user/get-orders',
            providesTags: ['Order']
        }),
        emptyCart: builder.mutation({
            query: () => ({
                url: '/api/empty-cart',
                method: 'DELETE',
            }),
            invalidatesTags: ['Cart']
        }),
    }),
});

export const {
    useGetUserQuery,
    useUpdateUserMutation,
    useGetUserCartQuery,
    useAddToCartMutation,
    useCreateOrderMutation,
    useGetUserOrdersQuery,
    useEmptyCartMutation,
} = userApiSlice;
