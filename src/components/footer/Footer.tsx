"use client"
import React from "react";
import { useTheme, Paper, Typography, Container, Box, Stack, Grid, Button } from "@mui/material";
import { experimentalStyled as styled } from '@mui/material/styles';
import Map from "./Map";
import { useThemeToggle } from "../theme/ThemeProvider";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { BASE_URL } from "@/config/constants";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#000' : '#fff',
    ...theme.typography.body2,
    // padding: theme.spacing(1),
    display: "flex", 
    flexDirection: 'column',
    color: theme.palette.text.secondary,
    border: 'none',
    boxShadow: "none",
}));
const CustomLink = styled(Link)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? '#fff' : '#000',
  ...theme.typography.subtitle2,
  padding: theme.spacing(1),
  transition: 'color 0.3s ease, background-color 0.3s ease',
}));
export const NavItem = ({ title, active, href }) => {
  return (
      <CustomLink 
        href={href}
        sx={{
          textDecoration: active ? 'underline' : 'none', 
          textUnderlineOffset: active ? '5px': 'none',
          p: 0,
          pt: 1,
        }}  
      >{title}</CustomLink>   
  )
}
const AllMenus = (data) => {
    const theme = useTheme();
    const toggleTheme = useThemeToggle();
    return (
      <Box sx={{display: { xs: 'flex'}, flexDirection: 'column', alignContent: "flex-start", alignItems: "flex-start"}}>
        
        {data.map((route, index)=> (
                    <NavItem
                      key={index}
                      href={route.href}
                      title={route.label}
                      active={route.active}
                    />
                  ))}
                </Box>
    )
}
export function  Footer(){
    const router = useRouter();
    const theme = useTheme();
    const pathName = usePathname();
    const data:any[] = [
        {
          href: `/`,
          label: "Home",
          active: pathName === `/`
        },
        {
          href: "image-convert/jpg-to-webp",
          label: "Image Convert",
          active: pathName === "/image-convert/jpg-to-webp"
        },
    ]
    
    const handleImageFormatChange = ( convertFrom:string, convertTo:string ) => router.push(`/image-convert/${convertFrom}-to-${convertTo}`);

    return (
        <>
            <Box sx={{ flexGrow: 1, padding: {xs: '5px', md: '20px 20px'}, bgcolor: theme.palette.mode === 'light' ? '#fff': "#000" }}>
                <Grid  container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 4, md: 12 }}>
                    <Grid item xs={4} sm={4} md={4} sx={{display: 'flex', flexDirection: {xs: 'row', md: 'row'}}}>
                        <Box sx={{width: '50%'}}>
                          <Typography variant="h6" color={theme.palette.mode === 'light' ? "#000": "#fff"} sx={{fontSize: "500"}}>Menus</Typography>
                          {AllMenus(data)}
                        </Box>
                        <Box sx={{width: '50%'}}>
                        <Item sx={{ height: {xs: '100%', md: '15rem' } }}>
                              <Typography variant="h6" color={theme.palette.mode === 'light' ? "#000": "#fff"} sx={{fontSize: "700"}}>Tools</Typography>
                      
                              <Button 
                                variant="text" 
                                size="small"
                                onClick={()=>handleImageFormatChange('webp', 'png')}
                                sx={{justifyContent: 'flex-start', color: theme.palette.mode === 'light' ? "#000": "#fff"}} 
                              >WEBP to PNG</Button>
                              <Button 
                                variant="text"  
                                size="small"
                                onClick={()=>handleImageFormatChange('jpeg', 'webp')}
                                sx={{justifyContent: 'flex-start', color: theme.palette.mode === 'light' ? "#000": "#fff"}}  
                              >JPEG to WEBP</Button>
                              <Button 
                                variant="text" 
                                size="small"
                                onClick={()=>handleImageFormatChange('png', 'webp')}
                                sx={{justifyContent: 'flex-start', color: theme.palette.mode === 'light' ? "#000": "#fff"}} 
                              >PNG to WEBP</Button>
                              <Button 
                                variant="text" 
                                size="small"
                                onClick={()=>handleImageFormatChange('png', 'jpeg')}
                                sx={{justifyContent: 'flex-start', color: theme.palette.mode === 'light' ? "#000": "#fff"}} 
                              >PNG to JPEG</Button>
                              <Button 
                                variant="text"
                                size="small"
                                onClick={()=>handleImageFormatChange('jpeg', 'png')}
                                sx={{justifyContent: 'flex-start', color: theme.palette.mode === 'light' ? "#000": "#fff"}} 
                              >JPEG to PNG</Button>
                          </Item>
                      </Box>
                        
                    </Grid>
                    
                    <Grid item xs={4} sm={4} md={4} sx={{display: 'flex', flexDirection: {xs: 'row', md: 'row'}}}>
                     
                      <Box sx={{width: '50%'}}>
                          <Item sx={{ height: {xs: '100%', md: '15rem' } }}>
                              <Typography variant="h6" color={theme.palette.mode === 'light' ? "#000": "#fff"} sx={{fontSize: "700"}}>Address</Typography>
                              <Typography variant="body2" color="text.secondary">Ghaghreti,</Typography>
                              <Typography variant="body2" color="text.secondary">Betalghat</Typography>
                              <Typography variant="body2" color="text.secondary">Nainital,</Typography>
                              <Typography variant="body2" color="text.secondary">UK 263134</Typography>
                          </Item>
                        </Box>
                      <Box sx={{width: '50%'}}>
                        <Item sx={{ height: {xs: '100%', md: '15rem' },}}>
                            <Typography variant="h6" color={theme.palette.mode === 'light' ? "#000": "#fff"}>Office Hours</Typography>
                            <Typography variant="body2" color="text.secondary">Monday-Friday</Typography>
                            <Typography variant="body2" color="text.secondary">7 PM - 7 AM</Typography>
                        </Item>
                      </Box>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                        <Item sx={{ height: {xs: '100%', md: '15rem' }, alignItems: "center", alignContent: 'center' }}>
                            <Map />
                        </Item>
                    </Grid>
                </Grid>
            </Box>
            <Box 
              sx={{
                height: '2rem', 
                display: 'flex', 
                flexDirection: {xs: "column", md: 'row'},
                alignItems: 'center',
                justifyContent: 'space-around'
              }} 
            >
              <Box>
                Copyright © 2024 - {BASE_URL} | All rights reserved
              </Box>
              <Box>
                <CustomLink 
                  href={"/privacy-policy"}
                  sx={{
                    textDecoration: 'none', 
                    textUnderlineOffset: 'none',
                    p: 0
                  }}  
                >Privacy-policy</CustomLink> 
              </Box>
            </Box>
        </>
    )
}
