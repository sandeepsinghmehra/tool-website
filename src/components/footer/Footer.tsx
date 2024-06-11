"use client"
import React from "react";
import { useTheme, Paper, Typography, Container, Box, Stack, Grid, Button } from "@mui/material";
import { experimentalStyled as styled } from '@mui/material/styles';
import Map from "./Map";
import { useThemeToggle } from "../theme/ThemeProvider";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#000' : 'hsla(60,6.67%,94.12%,1)',
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
        }}  
      >{title}</CustomLink>   
  )
}
const AllMenus = (data) => {
  console.log("data: ", data);
    const theme = useTheme();
    const toggleTheme = useThemeToggle();
    return (
      <Box sx={{display: { xs: 'flex'}, flexDirection: 'column', alignContent: "center", alignItems: "center", padding: ".5rem"}}>
        
        {data.map((route, index)=> (
                    <NavItem
                      key={index}
                      href={route.href}
                      title={route.label}
                      active={route.active}
                    />
                  ))}
                 
                  <Button
                    variant="contained" 
                    fullWidth 
                    href="sandeepsm017@gmail.com"  
                    sx={{
                      height: '60px',
                      bgcolor: 'contained',
                      color: theme.palette.mode === 'light' ? "#000": "#fff",
                    }}
                  >
                    Contact Us
                  </Button>
                </Box>
    )
}
export function  Footer(){
    const theme = useTheme();
    const pathName = usePathname();
    const data:any[] = [
        {
          href: `/`,
          label: "Home",
          active: pathName === `/`
        },
        {
          href: '/services',
          label: "Our services",
          active: pathName === `/services`
        },
    ]
    return (
        <>
            <Box sx={{ flexGrow: 1, padding: {xs: '5px', md: '40px 20px'}, bgcolor: theme.palette.mode === 'light' ? 'hsla(60,6.67%,94.12%,1)': "#000" }}>
                <Grid  container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 4, md: 12 }}>
                    <Grid item xs={4} sm={4} md={4} sx={{display: 'flex', flexDirection: {xs: 'column', md: 'row'}}}>
                        <Box>
                        <Typography variant="h3" color={theme.palette.mode === 'light' ? "#000": "#fff"} sx={{fontSize: "500"}}>Menus</Typography>
                        {AllMenus(data)}
                        </Box>
                        <Box>
                        <Item sx={{ height: {xs: '100%', md: '20rem' } }}>
                            <Typography variant="h3" color={theme.palette.mode === 'light' ? "#000": "#fff"} sx={{fontSize: "700"}}>Address</Typography>
                            <Typography variant="body2" color="text.secondary" margin={1}>Ghaghreti, Betalghat</Typography>
                            <Typography variant="body2" color="text.secondary" margin={1}>Nainital, UK 263134</Typography>
                        </Item>
                        </Box>
                        
                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                        <Item sx={{ height: {xs: '100%', md: '20rem' }, alignItems: "center", alignContent: 'center' }}>
                            <Map />
                        </Item>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                        <Item sx={{ height: {xs: '100%', md: '20rem' },}}>
                            <Typography variant="h4" color={theme.palette.mode === 'light' ? "#000": "#fff"}>Office Hours</Typography>
                            <Typography variant="body2" color="text.secondary" margin={1}>Monday-Friday</Typography>
                            <Typography variant="body2" color="text.secondary" margin={1}>8 AM - 4 PM</Typography>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
