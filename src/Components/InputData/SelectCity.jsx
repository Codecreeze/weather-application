import React, { useEffect, useState } from 'react';
import {
    FormControl,
    Grid,
    InputAdornment,
    InputLabel,
    ListSubheader,
    MenuItem,
    Select,
    TextField,
    Typography,
} from '@mui/material';
import Search from '@mui/icons-material/Search';
import { updateCityName, updateCountryName } from '../../Redux/Slices/CountrySlice';
import { getWeatherInformation } from '../../Redux/AsyncActions/asyncThunk';


// Styles

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = -20;
const MenuProps = {
    autoFocus: false,
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
            border: "2px solid DarkBlue",
            borderRadius: 5,
            overflowX: "scroll",
        },
    },
};




export default React.memo(function SelectCity(props) {
    const [searchText, setSearchText] = useState("");
    const { cityName, dispatch, cityList } = props;


    const filterNames = (brand) => {
        return (
            brand.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
        );
    };

    const handleCityName = (e) => {
        dispatch(updateCityName(e.target.value));
        dispatch(getWeatherInformation());
    };


    return (
        <React.Fragment>
            <FormControl sx={{
                mt: 2,
                width: { xs: "80vw", sm: "45vw", md: "20vw", lg: "15w" }
            }}
                size="small">
                <InputLabel id="demo-simple-select-label">Select city name</InputLabel>
                <Select
                    label="Select city name"
                    id="search-select"
                    value={cityName}
                    defaultValue={cityName}
                    onChange={handleCityName}
                    onClose={() => setSearchText("")}
                    MenuProps={MenuProps}
                >
                    <ListSubheader>
                        <TextField
                            sx={{ paddingY: 1 }}
                            size="small"
                            autoFocus
                            placeholder="Type to search..."
                            fullWidth
                            autoComplete='Off'
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Search />
                                    </InputAdornment>
                                )
                            }}
                            onChange={(e) => setSearchText(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key !== "Escape") {
                                    e.stopPropagation();
                                }
                            }}
                        />
                    </ListSubheader>
                    <MenuItem disabled value={cityName}>{null}</MenuItem>
                    {
                        cityList.filter(filterNames).map((country, id) => {
                            return <MenuItem key={id} value={country}>{country}</MenuItem>
                        })
                    }
                    {cityList.filter(filterNames).length === 0 &&
                        <Typography variant="body1"
                            sx={{ fontWeight: "bold", color: "darkslategray", ml: 2 }}
                        >Searched query not found in the list...
                        </Typography>
                    }
                </Select>
            </FormControl>
        </React.Fragment>

    )
})
