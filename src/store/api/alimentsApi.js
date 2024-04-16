
import { api } from ".";

export const alimentsApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getAliments: builder.query({
            query({ page = 1, limit = 30, search = '' }) {
                return {
                    method: "GET",
                    url: `/aliments?page=${page}&limit=${limit}&filters[name][$regex]=${search}`,
                    headers: { "Content-type": "application/json" },
                };
            },
            extraOptions: { maxRetries: 0 },
            transformResponse: (response) => {
                return response?.docs.map((aliment) => ({
                    label: aliment.name,
                    value: aliment.id,
                    ...aliment,
                }));
            },
        }),
    }),
});
