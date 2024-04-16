import { api } from ".";

export const dishesApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getDishes: builder.query({
            query({ page = 1, limit = 30, search = "" }) {
                return {
                    method: "GET",
                    url: `/dishes?page=${page}&limit=${limit}&filters[name][$regex]=${search}`,
                    headers: { "Content-type": "application/json" },
                };
            },
            extraOptions: { maxRetries: 0 },
            providesTags: ["dishes"],
            transformResponse: (response) => {
                const docs = response?.docs.map((dish) => ({
                    label: dish.name,
                    value: dish.id,
                    ...dish,
                }));
                return { ...response, docs };
            },
        }),
        getDish: builder.query({
            query(id){
                return {
                    method: "GET",
                    url: `/dishes/${id}`,
                    headers: { "Content-type": "application/json" },
                };
            },
            extraOptions: { maxRetries: 0 },
            providesTags: ["dishes"],
        }),
        addDish: builder.mutation({
            query(data) {
                return {
                    method: "POST",
                    url: `/dishes`,
                    body: JSON.stringify(data),
                    headers: { "Content-type": "application/json" },
                };
            },
            extraOptions: { maxRetries: 0 },
            invalidatesTags: ["dishes"],
        }),
        upDateDish: builder.mutation({
            query({ id, data }) {
                return {
                    method: "PATCH",
                    url: `/dishes/${id}`,
                    body: JSON.stringify(data),
                    headers: { "Content-type": "application/json" },
                };
            },
            extraOptions: { maxRetries: 0 },
            invalidatesTags: ["dishes"],
        }),
        deleteDish: builder.mutation({
            query(id) {
                return {
                    method: "DELETE",
                    url: `/dishes/${id}`,
                    headers: { "Content-type": "application/json" },
                };
            },
            extraOptions: { maxRetries: 0 },
            invalidatesTags: ["dishes"],
        }),
    }),
});
