import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';



export const getCountryList = createAsyncThunk(
    'countries/getCountryList',
    async (stateId, { getState, rejectWithValue }) => {

        try {
            const { data } = await axios.get(`https://countriesnow.space/api/v0.1/countries`);
            return data;
        }
        catch (error) {
            return rejectWithValue(error.response);
        }
    }
);

export const getWeatherInformation = createAsyncThunk(
    'weather/getWeatherInformation',
    async (stateId, { getState, rejectWithValue }) => {
        const state = getState();
        const CITY_NAME = state.countryList.cityName;
        const COUNTRY_NAME = state.countryList.countryName;
        const API_KEY = "4e73ef8b26804c70a0583533232604";
        try {
            const { data } = await axios.post(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${CITY_NAME},${COUNTRY_NAME}&aqi=no`);
            return data;
        }
        catch (error) {
            return rejectWithValue(error.response);
        }
    }
);

