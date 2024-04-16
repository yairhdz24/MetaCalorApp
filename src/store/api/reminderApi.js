import { api } from ".";

export const reminderApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getReminders: builder.query({
            query() {
                return {
                    method: "GET",
                    url: "/reminders",
                    headers: { "Content-type": "application/json"},
                };
            },
            extraOptions: { maxRetries: 0 },
            providesTags: ["reminder"],
        }),
        addReminder: builder.mutation({
            query(data) {
                return {
                    method: "POST",
                    url: '/reminders',
                    body: JSON.stringify(data),
                    headers: { "Content-Type": "application/json" },
                };
            },
            extraOptions: { maxRetries: 0 },
            invalidatesTags: ["reminder"],
        }),
        upDateReminder: builder.mutation({
            query({ id, data }) {
                return {
                    method: "PATCH",
                    url: `/reminders/${id}`,
                    body: JSON.stringify(data),
                    headers: { "Content-type": "application/json" },
                };
            },
            extraOptions: { maxRetries: 0 },
            invalidatesTags: ["reminder"],
        }),
        deleteReminder: builder.mutation({
            query(id) {
                return {
                    method: "DELETE",
                    url: `/reminders/${id}`,
                    headers: { "Content-type": "application/json" },
                };
            },
            extraOptions: { maxRetries: 0 },
            providesTags: ["reminder"],
        }),
    }),
});