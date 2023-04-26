import { configureStore } from "@reduxjs/toolkit";
import CountrySlice from "./Slices/CountrySlice";
import WeatherSlice from "./Slices/WeatherSlice";


const store  = configureStore({
    reducer:{
        countryList: CountrySlice,
        weather: WeatherSlice,
    }
})


export default store;