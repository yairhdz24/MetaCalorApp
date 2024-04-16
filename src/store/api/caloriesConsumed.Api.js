import { api } from ".";

export const caloriesConsumedApi = api.injectEndpoints({
    endpoints: builder => ({
        addCaloriesConsumed: builder.mutation({
            query(caloriesConsumed) {
                return {
                    method  : "POST",
                    url     : "/caloriesConsumed",
                    body    : JSON.stringify(caloriesConsumed),
                    headers : { "Content-type" : "application/json" },
                };
            },
            extraOptions : { maxRetries : 0 },
            invalidatesTags: ["CaloriesConsumed"],
        }),
        getCaloriesConsumed: builder.query({
            query({page = 1, limit = 10}) {
                return {
                    method  : "GET",
                    url     : `/caloriesConsumed?page=${page}&limit=${limit}`,
                    headers : { "Content-type" : "application/json" },
                };
            },
            extraOptions : { maxRetries : 0 },
            providesTags: ["CaloriesConsumed"],
        }),
    }),
});