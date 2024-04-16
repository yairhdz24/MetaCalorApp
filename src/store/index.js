
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import localForage from "localforage";

import {
    FLUSH,
    PAUSE,
    PURGE,
    PERSIST,
    REGISTER,
    REHYDRATE,
    persistStore,
    persistReducer,
} from "redux-persist";

// Import Own Components
import { api } from "./api";
// import * as Slices from "./slice";

// const rootReducer = combineReducers({
//     // ...Object.entries(Slices).reduce(
//     //     (acc, [key, value]) => ({
//     //         ...acc,
//     //         [key]: value.reducer,
//     //     }),
//     //     {}
//     // ),
//     [api.reducerPath]: api.reducer,
// });


const persistConfig = {
    key: "root",
    storage: localForage,
    version: 1,
};

const persistedReducer = persistReducer(persistConfig,);
// console.log(persistedReducer)

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
    
    },
    devTools: import.meta.env.DEV,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, PAUSE, PURGE, PERSIST, REGISTER, REHYDRATE],
            },
        }).concat(api.middleware),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
export default store;