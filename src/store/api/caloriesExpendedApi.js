import { api } from ".";

export const caloriesExpendedApi = api.injectEndpoints({
    endpoints: builder => ({
        addCaloriesExpended: builder.mutation({
            query(caloriesExpended) {
                return {
                    method  : "POST",
                    url     : "/caloriesExpended",
                    body    : JSON.stringify(caloriesExpended),
                    headers : { "Content-type" : "application/json" },
                };
            },
            extraOptions : { maxRetries : 0 },
            invalidatesTags: ["CaloriesExpended"],
        }),
        getCaloriesExpended: builder.query({
            query({page = 1, limit = 10}) {
                return {
                    method  : "GET",
                    url     : `/caloriesExpended?page=${page}&limit=${limit}`,
                    headers : { "Content-type" : "application/json" },
                };
            },
            extraOptions : { maxRetries : 0 },
            providesTags: ["CaloriesExpended"],
        }),
    }),
});