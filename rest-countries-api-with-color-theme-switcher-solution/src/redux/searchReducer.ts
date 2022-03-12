import {createSelector, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./store";

interface SearchState {
    region?: string,
    countryName?: string
}

const initialState = {
    region: undefined,
    countryName: undefined
} as SearchState;

const searchSlice = createSlice({
    name: "search",
    initialState: initialState,
    reducers: {
        updateRegion(state, action: PayloadAction<string>) {
            state.region = action.payload
        },
        updateCountryName(state, action: PayloadAction<string>) {
            state.countryName = action.payload
        },
        clear(state) {
            state.region = undefined;
            state.countryName = undefined;
        }
    }
})

export const { updateRegion, updateCountryName, clear} = searchSlice.actions;

export const searchRootSelector = (state: RootState) => state.searchReducer;
export const selectRegionFilter = createSelector(searchRootSelector, (search) => search.region);
export const selectCountryNameFilter = createSelector(searchRootSelector, (search) => search.countryName);


export default searchSlice.reducer;
