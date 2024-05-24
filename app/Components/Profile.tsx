'use client';

import { AccountCircle } from "@mui/icons-material";
import { Avatar, Box, IconButton, Menu, MenuItem } from "@mui/material";
import { useState } from "react";

export const Profile = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{color:'white'}}>
            <IconButton onClick={handleMenu} color="inherit">
                <Avatar>
                    <AccountCircle />
                </Avatar>
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem onClick={handleClose}>User Name</MenuItem>
                <MenuItem onClick={handleClose}>admin@example.com</MenuItem>
                <MenuItem onClick={handleClose} sx={{ color: 'red' }}>Logout</MenuItem>
            </Menu>
        </Box>
    )
}



