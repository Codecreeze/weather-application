import React from 'react';
import { Box, Card, CardContent, Divider, Typography } from '@mui/material';
import WAVE_IMAGE from "../../Assets/wave3.png";



function WeatherReport(props) {
    const { cityName, countryName, weatherData, weatherError } = props;


    let TEMPRATURE = "";
    let WIND_SPEED = "";
    let PRESSURE = "";
    let VISIBILTY = "";
    let HUMIDITY = "";
    let WEATHER_ICON = [];
    let WEATHER_DESCRIPTION = [];
    if (weatherData) {
        if (weatherData.current) {
            let data = weatherData.current;
            TEMPRATURE = data.temp_c;
            HUMIDITY = data.humidity;
            WIND_SPEED = data.wind_kph;
            PRESSURE = data.pressure_mb;
            VISIBILTY = data.vis_km;
            if (weatherData.current.condition) {
                let data = weatherData.current;
                WEATHER_ICON = data.condition.icon;
                WEATHER_DESCRIPTION = data.condition.text;
            }
        }
    };





    return (
        <React.Fragment>
            <Card sx={{
                width: { xs: "80vw", sm: "80vw", md: "30vw" },
                height: "auto",
                borderRadius: 5, boxShadow: " 0px 0px 10px 7px #f2f2f2",
            }}
                elevation={0}>
                <Box sx={{ display: { xs: "none", lg: "block" }}}>
                    <img src={WAVE_IMAGE} alt="WAVE_IMAGE" style={{ width: "30vw" }} />
                </Box>
                <Box sx={{ my: 3, display: "flex", justifyContent: "space-between", ml: 7, mr: 7, mt: {xs : 5, lg: 0} }}>
                    <div >
                        <Typography variant='h5' sx={{ color: "black", fontWeight: "bold" }}>{cityName}</Typography>
                        <Typography variant='subtitle2' sx={{ color: "gray" }}>{countryName}</Typography>
                    </div>
                    <div>
                        <img src={WEATHER_ICON}
                            alt="WEATHER_ICON"
                            style={{
                                width: 60, height: "10vh",
                            }} />
                        <Typography variant='subtitle2' sx={{ color: "gray" }}>{WEATHER_DESCRIPTION}</Typography>

                    </div>
                </Box>

                <CardContent>
                    {cityName &&
                        <Box sx={{ mx: 2 }}>
                            <Typography variant="body2" sx={{ display: "flex", justifyContent: "space-between" }} >
                                Temprature: <span style={{ marginLeft: "auto", color: "#003d99" }}>{TEMPRATURE}</span>°C
                            </Typography>
                            <Divider sx={{ mb: 1 }} />

                            <Typography variant="body2" sx={{ display: "flex", justifyContent: "space-between" }} >
                                Humidity: <span style={{ marginLeft: "auto", color: "#003d99" }}>{HUMIDITY}</span>gm<sup>-3</sup>
                            </Typography>
                            <Divider sx={{ mb: 1 }} />

                            <Typography variant="body2" sx={{ display: "flex", justifyContent: "space-between" }} >
                                Wind Speed: <span style={{ marginLeft: "auto", color: "#003d99" }}>{WIND_SPEED}</span> km/h
                            </Typography>
                            <Divider sx={{ mb: 1 }} />

                            <Typography variant="body2" sx={{ display: "flex", justifyContent: "space-between" }} >
                                Pressure: <span style={{ marginLeft: "auto", color: "#003d99" }}>{PRESSURE}</span>pascal
                            </Typography>
                            <Divider sx={{ mb: 1 }} />

                            <Typography variant="body2" sx={{ display: "flex", justifyContent: "space-between" }} >
                                Visibilty: <span style={{ marginLeft: "auto", color: "#003d99" }}>{VISIBILTY}</span>km
                            </Typography>
                            <Divider sx={{ mb: 1 }} />


                        </Box>
                    }

                </CardContent>


            </Card>


        </React.Fragment>
    )
}

export default WeatherReport;