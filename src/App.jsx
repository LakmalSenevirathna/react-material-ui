import React from 'react'
import Sidebar from './Components/Sidebar'
import Feed from './Components/Feed'
import Rightbar from './Components/Rightbar'
import { Box, Stack } from '@mui/material'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <Box>
      <Navbar/>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar/>
        <Feed/>
        <Rightbar/>
      </Stack>
    </Box>
  )
}

export default App
