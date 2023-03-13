import React from 'react'
import { Box, BoxProps } from '@mui/material'
// import logo from '../images/logo4.png'

export const Logo: React.FC<BoxProps> = (props) => {
  const { onClick } = props
  return (
    <Box
      {...props}
      onClick={onClick}
      sx={{
        '&:hover': { cursor: 'pointer' }
      }}
    >
      <img src="https://ccdao.club/logo4.png" width='120' height='80' alt='logo' />
    </Box>
  )
}

export default Logo
