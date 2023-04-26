import React from 'react';
import { LockReset, Menu, PersonPin, ResetTv } from '@mui/icons-material';
import {
    Avatar,
    Box,
    Divider, Drawer,
    ListItem,
    listItemClasses,
    ListItemIcon,
    IconButton,
    ListItemText,
    List,
    Grid,
    Typography,
    CssBaseline
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';




function MenuDrawer() {
    const [open, setOpen] = useState();


    const handleSignOut = async (e) => {
        setOpen(false);
        e.preventDefault();
    };

    const handleChangePassword = (e) => {
        e.preventDefault();
        setOpen(false);
    };

    const drawerWidth = 260;


    return (
        <div>
            <Drawer open={open} onClose={() => setOpen(false)}
                sx={{
                    display: { xs: 'block', sm: 'block' },
                    '& .MuiDrawer-paper': { width: { xs: drawerWidth, sm: 300, } },
                }}
            >
                <Box component="span" sx={{ m: 3, marginLeft: 10 }}>
                    <IconButton
                        edge="start"
                        color="primary"
                        sx={{ ml: 4 }}
                    >
                        <Avatar sx={{ bgcolor: "#66b3ff" }}>
                            <PersonPin />
                        </Avatar>

                    </IconButton>
                    <Typography variant='subtitle2'>Hello, Pradeep Kumar</Typography>
                </Box>
                <Divider />
                <List
                    sx={{
                        [`& .active, & .${listItemClasses.root}:hover`]: {
                            backgroundColor: "#adebeb",
                            fontWeight: "bold",
                            "& svg": {
                                fill: "#0080ff"
                            }
                        },
                    }}>

                    <ListItem onClick={handleChangePassword}>
                        <ListItemIcon>
                            <LockReset sx={{ color: "#3399ff" }} />
                        </ListItemIcon>
                        Change Password
                    </ListItem>
                    <ListItem onClick={handleSignOut}>
                        <ListItemIcon>
                            <ResetTv sx={{ color: "#3399ff" }} />
                        </ListItemIcon>
                        <ListItemText>Log Out</ListItemText>
                    </ListItem>
                </List>
            </Drawer>
            <Grid container sx={{ placeItems: "center" }}>
                <Grid item xs={2}>
                    <IconButton onClick={() => setOpen(true)} sx={{ marginLeft: "auto", color: "white" }}>
                        <Menu sx={{ color: "white" }} />
                    </IconButton>
                </Grid>

            </Grid>
            <CssBaseline />
        </div>
    )
};

export default MenuDrawer;