import { createSlice } from "@reduxjs/toolkit";
import { getWeatherInformation } from "../AsyncActions/asyncThunk";


const initialState = {
    weatherLoading: false,
    weatherError: null,
    weatherData: [],
};

const CountrySlice = createSlice({
    name: "countryNames",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getWeatherInformation.pending, (state) => {
            state.weatherLoading = true;
        })
        builder.addCase(getWeatherInformation.fulfilled, (state, action) => {
            state.weatherData = action.payload;
            state.weatherLoading = false;
        })
        builder.addCase(getWeatherInformation.rejected, (state, action) => {
            state.weatherLoading = false;
            state.weatherError = action.payload;
        })

    },
});


export default CountrySlice.reducer;
