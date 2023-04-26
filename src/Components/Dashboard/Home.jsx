import React, { useEffect } from 'react';
import { Grid, Stack } from '@mui/material';
import SelectCountry from '../InputData/SelectCountry';
import NavBar from '../Header/NavBar';
import { getCountryList, getWeatherInformation } from '../../Redux/AsyncActions/asyncThunk';
import { useDispatch, useSelector } from 'react-redux';
import SelectCity from '../InputData/SelectCity';
import WeatherReport from './WeatherReport';
import Footer from '../Footer/Footer';

export default function Home() {
    const dispatch = useDispatch();
    const { countryName, countryList, cityName, cityList } = useSelector((state) => state.countryList);
    const { weatherData, weatherLoading, weatherError } = useSelector((state) => state.weather);




    let OnlyCountryNames = [];
    if (countryList) {
        OnlyCountryNames = countryList.map((row) => row.country);
    }


    useEffect(() => {
        dispatch(getCountryList());
        dispatch(getWeatherInformation());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getWeatherInformation());
    }, [dispatch, cityName]);

    // console.log('countryName', countryName)

    return (
        <React.Fragment>
            <div style={{ backgroundColor: "floralwhite", minHeight: "100vh" }}>
                <NavBar />
                <Grid container spacing={2} sx={{ mt: 5 }} alignItems="center" justifyContent="center" direction="column" >

                    <Grid item xs={12} sm={12} md={6} lg={12} xl={12} sx={{ my: 2 }}>
                        <Stack direction={{ xs: "column", sm: "row" }}>
                            <SelectCountry OnlyCountryNames={OnlyCountryNames} countryName={countryName} dispatch={dispatch} countryList={countryList} />
                            <SelectCity cityName={cityName} cityList={cityList} dispatch={dispatch} />
                        </Stack>

                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ my: 2 }}>
                        <WeatherReport countryName={countryName} cityName={cityName} weatherData={weatherData} weatherError={weatherError} />
                    </Grid>
                </Grid>
                <Footer/>
            </div>

        </React.Fragment>
    );
}