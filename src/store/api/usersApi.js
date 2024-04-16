import { api } from ".";



export const usersApi = api.injectEndpoints({
    endpoints : builder => ({
        getUsers : builder.query({
            query(params) {
                return {
                    method  : "GET",
                    url     :  `/users?limit=${params.limit}&page=${params.page}&sort=${params.sort}`,
                    headers : { "Content-type" : "application/json" },
                };
            },
            extraOptions : { maxRetries : 0 },
        })
    }),
});
