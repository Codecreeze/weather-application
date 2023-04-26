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
import { useDispatch, useSelector } from 'react-redux';
import { getCityList, updateCityName, updateCountryName } from '../../Redux/Slices/CountrySlice';
import { getCountryList } from '../../Redux/AsyncActions/asyncThunk';


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




export default React.memo(function SelectCountry(props) {
    const [searchText, setSearchText] = useState("");
    const { countryName, dispatch, OnlyCountryNames, countryList } = props;






    const filterNames = (country) => {
        return (
            country.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
        );
    };

   

    useEffect(() => {
        const country = countryList.find(
            (country) => country.country === "India"
        );
        if (country) {
            dispatch(getCityList(country?.cities));
        }
    }, [countryList, dispatch])




    const handleCountryName = (e) => {
        dispatch(updateCountryName(e.target.value));
        dispatch(updateCityName(""));
        const country = countryList.find(
            (country) => country.country === e.target.value
        );
        dispatch(getCityList(country.cities));
    };


    return (
        <React.Fragment>

            <FormControl sx={{
                mt: 2, mr: { sm: 4 },
                width: { xs: "80vw", sm: "45vw", md: "20vw", lg: "15w" }
            }}
                size="small">
                <InputLabel id="demo-simple-select-label">Select country name</InputLabel>
                <Select
                    label="Select country name"
                    id="search-select"
                    value={countryName}
                    defaultValue={countryName}
                    onChange={handleCountryName}
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
                    <MenuItem disabled value={countryName}>{null}</MenuItem>
                    {
                        OnlyCountryNames.filter(filterNames).map((country, id) => {
                            return <MenuItem key={id} value={country}>{country}</MenuItem>
                        })
                    }
                    {OnlyCountryNames.filter(filterNames).length === 0 &&
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
