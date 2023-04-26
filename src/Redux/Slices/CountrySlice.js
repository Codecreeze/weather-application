import { createSlice } from "@reduxjs/toolkit";
import { getCountryList } from "../AsyncActions/asyncThunk";


const initialState = {
    isLoading: false,
    isError: null,
    countryName: "India",
    countryList: [],
    cityList: [],
    cityName: "Delhi",
};

const CountrySlice = createSlice({
    name: "countryNames",
    initialState,
    reducers: {
        updateCountryName: (state, action) => {
            state.countryName = action.payload;
        },
        updateCityName: (state, action) => {
            state.cityName = action.payload;
        },
        getCityList: (state, action) => {
            state.cityList = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getCountryList.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getCountryList.fulfilled, (state, action) => {
            state.countryList = action?.payload?.data || [];
            state.isLoading = false;
        })
        builder.addCase(getCountryList.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = action.payload;
        })

    },
});

export const { updateCountryName, updateCityName, getCityList } = CountrySlice.actions;

export default CountrySlice.reducer;
