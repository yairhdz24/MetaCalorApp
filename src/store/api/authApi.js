import { api } from ".";

export const authApi = api.injectEndpoints({
    endpoints : builder => ({
        login : builder.mutation({
            query(credentials) {
                return {
                    method  : "POST",
                    url     : "/auth/login",
                    body    : JSON.stringify(credentials),
                    headers : { "Content-type" : "application/json" },
                };
            },
            extraOptions : { maxRetries : 0 },
        }),
        register : builder.mutation({
            query(registerForm) {
                return {
                    method  : "POST",
                    url     : "auth/register",
                    body    : JSON.stringify(registerForm),
                    headers : { "Content-type" : "application/json" },
                };
            },
            extraOptions : { maxRetries : 0 },
        }),
    }),
});