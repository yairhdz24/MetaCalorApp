import { api } from ".";



export const profileApi = api.injectEndpoints({
    endpoints : builder => ({
        getProfile : builder.query({
            query() {
                return {
                    method  : "GET",
                    url     : "/profile/me",
                    headers : { "Content-type" : "application/json" },
                };
            },
            extraOptions : { maxRetries : 0 },
            providesTags : [ "profile" ],
        }),
        getPosition : builder.query({
            query() {
                return {
                    method  : "GET",
                    url     : "/profile/position",
                    headers : { "Content-type" : "application/json" },
                };
            },
            extraOptions : { maxRetries : 0 },
        }),
        updateProfile : builder.mutation({
            query(data) {
                return {
                    method  : "PATCH",
                    url     : "/profile/me",
                    body : JSON.stringify(data),
                    headers : { "Content-type" : "application/json" },
                };
            },
            extraOptions : { maxRetries : 0 },
            invalidatesTags : [ "profile" ],
        }),
        deleteProfile : builder.mutation({
            query() {
                return {
                    method  : "DELETE",
                    url     : "/profile/me",
                    headers : { "Content-type" : "application/json" },
                };
            },
            extraOptions : { maxRetries : 0 },
            invalidatesTags : [ "profile" ],
        }),
    }),
});
