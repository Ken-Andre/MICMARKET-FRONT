import { apiSlice } from "../../app/api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: '/api/user/login',
                method: 'POST',
                body: { ...credentials }
            })
        }),
        adminLogin: builder.mutation({
            query: credentials => ({
                url: '/api/user/admin-login',
                method: 'POST',
                body: { ...credentials }
            })
        }),
        startupLogin: builder.mutation({
            query: credentials => ({
                url: '/api/user/smooth-login',
                method: 'POST',
                body: { ...credentials }
            })
        }),
        register: builder.mutation({
            query: userData => ({
                url: '/api/user/register',
                method: 'POST',
                body: { ...userData }
            })
        }),
        forgotPassword: builder.mutation({
            query: email => ({
                url: '/api/user/forgot-password-token',
                method: 'POST',
                body: { email }
            })
        }),
        resetPassword: builder.mutation({
            query: ({ token, password }) => ({
                url: `/api/user/reset-password/${token}`,
                method: 'PUT',
                body: { password }
            })
        }),
        logout: builder.mutation({
            query: () => ({
                url: '/api/user/logout',
                method: 'GET',
            })
        }),
    })
})

export const {
    useLoginMutation,
    useAdminLoginMutation,
    useStartupLoginMutation,
    useRegisterMutation,
    useForgotPasswordMutation,
    useResetPasswordMutation,
    useLogoutMutation,
} = authApiSlice
