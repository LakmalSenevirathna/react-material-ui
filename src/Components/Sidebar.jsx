import { AccountBox, Article, Home, ModeNight, People, Person, Settings, Store } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'

const Sidebar = () => {
  return (
    <Box flex={1} p={2} sx={{display: {
        xs: "none",
        sm: "block"
    }}}>
      <Box position={"fixed"} >
        <List>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#" >
                <ListItemIcon>
                  <Home/>
                </ListItemIcon>
                <ListItemText primary="Homepage" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#" >
                <ListItemIcon>
                  <Article/>
                </ListItemIcon>
                <ListItemText primary="Pages" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#" >
                <ListItemIcon>
                  <People/>
                </ListItemIcon>
                <ListItemText primary="Groups" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#" >
                <ListItemIcon>
                  <Store/>
                </ListItemIcon>
                <ListItemText primary="Marketplace" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#" >
                <ListItemIcon>
                  <Person/>
                </ListItemIcon>
                <ListItemText primary="Friends" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#" >
                <ListItemIcon>
                  <Settings/>
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#" >
                <ListItemIcon>
                  <AccountBox/>
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#" >
                <ListItemIcon>
                  <ModeNight/>
                </ListItemIcon>
                <Switch/>
              </ListItemButton>
            </ListItem>
          </List>
      </Box>
    </Box>
  )
}

export default Sidebar
