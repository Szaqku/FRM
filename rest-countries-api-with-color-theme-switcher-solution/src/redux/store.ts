import {configureStore} from '@reduxjs/toolkit'
import {countriesApi} from "../api/model/api";
import {setupListeners} from "@reduxjs/toolkit/query";
import searchReducer from "./searchReducer";

export const store = configureStore({
    reducer: {
        [countriesApi.reducerPath]: countriesApi.reducer,
        searchReducer: searchReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(countriesApi.middleware),
    devTools: true
})

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
