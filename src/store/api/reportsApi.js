import { api } from ".";



export const reportsApi = api.injectEndpoints({
    endpoints : builder => ({
        getReports : builder.query({
            query() {
                return {
                    method  : "GET",
                    url     : "/reports",
                    headers : { "Content-type" : "application/json" },
                };
            },
            extraOptions : { maxRetries : 0 },
        }),
    }),
});
