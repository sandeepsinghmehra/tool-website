"use client"
import { Button } from '@mui/material'
import React from 'react'

const TabButton = ({isActive, handleImageFormatChange, btnName}) => {
  return (
    <>
        <Button
            sx={{
                borderBottom: isActive ? "5px solid green" : "5px solid orange", 
                fontSize: {xs: '.4rem', md: '.68rem'},
                bgcolor: isActive ? "#42EADDFF": "primary"
            }}  
            onClick={handleImageFormatChange}
            color='primary'
            variant='contained'
            size='small'
        >{btnName}</Button> 
    </>
  )
}

export default TabButton
