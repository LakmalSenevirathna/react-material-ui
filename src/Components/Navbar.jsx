import { Mail, Notifications, Pets } from '@mui/icons-material'
import { AppBar, Toolbar, Typography, styled, Box, InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'

// Creates a new styled Toolbar component named StyledToolbar - Directly applies styles without using theme.
const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
});

// Creates a new styled div component named Search - Use a function to receive the theme object
const Search = styled("div")(({theme}) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}));

// Creates a new styled Box component named Icons - Use a function to receive the theme object
const Icons = styled(Box)(({theme}) => ({
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]:{
        display: "flex"
    }
}));

const UserBox = styled(Box)(({theme}) => ({
    display: "flex",
    gap: "10px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]:{
        display: "none"
    },
    cursor: "pointer"
}));

const Navbar = () => {

    const [menu, setMenu] = useState(false);

    const [anchorEl, setAnchorEl] = useState(null);

  return (
    <AppBar position="sticky">
        <StyledToolbar>
            <Typography variant="h6" sx={{display: {xs: "none", sm: "block"}}}>Hello Dev</Typography>
            <Pets sx={{display: {xs: "block", sm: "none"}}} />
            <Search><InputBase placeholder="Search..." sx={{width: "100%"}}></InputBase></Search>
            <Icons>
                <Badge badgeContent={4} color="error">
                    <Mail/>
                </Badge>
                <Badge badgeContent={2} color="error">
                    <Notifications/>
                </Badge>
                <Avatar src="#" sx={{width: 30, height: 30, cursor: "pointer"}} onClick={(e)=>{setMenu(true); setAnchorEl(e.currentTarget)}} />
            </Icons>
            <UserBox onClick={(e)=>{setMenu(true); setAnchorEl(e.currentTarget)}}>
                <Avatar src="#" sx={{width: 30, height: 30}} />
                <Typography>John</Typography>
            </UserBox>
                <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    // The anchorEl prop should be the DOM element that the Menu is anchored to
                    // Store the target element when opening the menu and then use it as the anchorEl.
                    anchorEl={anchorEl}
                    open={menu}
                    onClose={(e)=>{setMenu(false); setAnchorEl(null);}}
                    anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                >
                <MenuItem >Profile</MenuItem>
                <MenuItem >My account</MenuItem>
                <MenuItem >Logout</MenuItem>
                </Menu>
        </StyledToolbar>
    </AppBar>
  )
}

export default Navbar
