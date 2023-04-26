import React, { useState } from 'react';
import {
    ListItemIcon,
    Tooltip,
    Menu,
    MenuItem,
    IconButton,
    Avatar,
    Typography
} from '@mui/material';
import { LockReset, Logout, Person } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';


export default function ProfileButton() {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);





    const handleOpenUserMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };




    return (
        <React.Fragment>
            <Tooltip title="User">

                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                        sx={{ width: 45, height: 45, backgroundColor: "#884dff", border: `1px solid ${"blue"}` }}
                    > <Person /></Avatar>
                </IconButton>
            </Tooltip>
            <Menu
                id="demo-customized-menu"
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem sx={{ "&:hover": { background: "none", cursor: "auto" } }} disableRipple>
                    <ListItemIcon>
                        <Person sx={{ color: "blue" }} />
                    </ListItemIcon>
                    <Typography variant='subtitle1' color="black" >
                        Hello, Pradeep Kumar
                    </Typography> &emsp;
                </MenuItem>
                <MenuItem >
                    <ListItemIcon>
                        <LockReset sx={{ color: "blue" }} />
                    </ListItemIcon>
                    Change Password
                </MenuItem>
                <MenuItem >
                    <ListItemIcon>
                        <Logout sx={{ color: "blue" }} />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </React.Fragment>
    );
}
