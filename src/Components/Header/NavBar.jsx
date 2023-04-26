import React from 'react';
import {
    AppBar,
    Box,
    CssBaseline,
    IconButton,
    Toolbar,
    Typography,
    useMediaQuery,
    useTheme
}
    from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MenuDrawer from './MenuDrawer';
import ProfileButton from './ProfileButton';



export default React.memo(function NavBar() {
    const navigate = useNavigate();
    const themeResp = useTheme();


    const isMatch = useMediaQuery(themeResp.breakpoints.down("sm"));


    const handleLogoIcon = (e) => {
        e.preventDefault();
        navigate("/");
    };



    return (
        <div>
            <AppBar position="static" elevation={0} sx={{ backgroundColor: "#3399ff" }}>
                <Toolbar>
                    {isMatch ?
                        (<>
                            <MenuDrawer />
                            <Box sx={{ marginX: "auto" }}>
                                <IconButton
                                    edge="start"
                                    onClick={handleLogoIcon}
                                >
                                    <Typography variant='h6' sx={{ color: "white", fontWeight: "bold" }}>Weather Application</Typography>
                                </IconButton>
                            </Box>
                        </>) :
                        (<>

                            <Box sx={{ flexGrow: 1 }}>
                                <IconButton
                                    edge="start"
                                    onClick={handleLogoIcon}
                                >
                                    <Typography variant='h6' sx={{ color: "white", fontWeight: "bold" }}>Weather Application</Typography>
                                </IconButton>
                            </Box>
                            <>
                                <ProfileButton />
                            </>

                        </>)}
                </Toolbar>
            </AppBar>
            <CssBaseline />
        </div >
    )
});