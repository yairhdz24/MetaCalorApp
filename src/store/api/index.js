import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../config";
import { AuthContext } from "../../auth/context/AuthContext";
import { useContext } from "react";

const baseQuery = fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers) => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!!user) {
            headers.set("authorization",`Bearer ${user.token}`);
        }
        return headers;
    },
});


const baseQueryWithReauth = async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);
    if (result.error && result.error.status === 401) {
        const {logout} = useContext(AuthContext);
        logout();
    }
    return result;
};

const baseQueryWithRetry = retry(baseQueryWithReauth, { maxRetries: 2 });

export const api = createApi({
    reducerPath: "api",
    baseQuery: baseQueryWithRetry,
    tagTypes: ['dishes', 'profile', 'reminder'],
    keepUnusedDataFor: 10,
    refetchOnMountOrArgChange: 10,
endpoints: () => ({}),
});