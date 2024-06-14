"use client"

import React, { useState } from "react";
import { AppBar, Box, Button, Drawer, IconButton, Link as MuiLink, Skeleton, Toolbar, styled, useTheme } from "@mui/material";
import { Close, DarkModeRounded, LightModeOutlined, LinkedIn, Menu } from "@mui/icons-material";
import { usePathname } from "next/navigation";
import Link from 'next/link';
import Image from "next/image";
import { useThemeToggle } from "@/components/theme/ThemeProvider";


const CustomLink = styled(Link)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? '#fff' : '#000',
  ...theme.typography.subtitle2,
  padding: theme.spacing(1),
  transition: 'color 0.3s ease, background-color 0.3s ease',
}));

const Logo = styled(Image)({
  height: 40,
  width: 40,
});

export function  Header(){
  const pathName = usePathname();
  const theme:any = useTheme();
  const toggleTheme:any = useThemeToggle();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const data:any[] = [
      {
        href: `/`,
        label: "Home",
        active: pathName === `/`
      },
      {
        href: "image-convert/jpeg-to-webp",
        label: "Image Convert",
        active: pathName === "/image-convert/jpeg-to-webp"
      },
      // {
      //   href: '/services',
      //   label: "Our services",
      //   active: pathName === `/services`
      // },
  ]
  const handleMobileMenu:any = () => {
    setIsMobileMenuOpen(true);
  }
  const handleMobileMenuClose:any = () => {
    setIsMobileMenuOpen(false);
  }
  return (
      <> 
        <Box 
          sx={{flexGrow: 1}} 
        >
          <AppBar 
            elevation={0}
            position='static' 
            sx={{ 
              bgcolor: theme.palette.mode === 'light' ? "#fff": "#000" 
            }}
          >
            <Toolbar sx={{p: {xs: 0, md: 0}}}>
              <Box>
                <Link href={'/'}>
                  <Logo
                    src={"/convertmasterLogo.png"}
                    alt={"Convert Master Logo"}
                    width={40}
                    height={40}
                  />
                </Link>
              </Box>
              <Box sx={{flexGrow: 1}} />
              <Box sx={{ display: { xs: "block", sm: "block", md: 'none'}}}>
                <IconButton 
                  onClick={toggleTheme}
                  title="theme-button-icons"
                >
                  { theme.palette.mode === 'light' ?<DarkModeRounded /> : <LightModeOutlined /> }
                </IconButton>
                <IconButton 
                  sx={{ color: theme.palette.mode === 'light' ? "#000":"#fff" }}
                  onClick={handleMobileMenu}
                >
                  <Menu />
                </IconButton>
              </Box>

              {!isMobileMenuOpen && AllMenus(data) }
              {isLoading ? <Skeleton /> : (
            <Drawer 
              open={isMobileMenuOpen} 
              onClose={handleMobileMenuClose}
              PaperProps={{
                sx: {
                    width: '50%',
                    maxHeight: '100vh', // ensures it takes full screen height if needed
                },
            }}
            >
               <Box
                sx={{
                    height: '100%', // ensure the content takes full height of the drawer
                    p: 2,
                }}
            >
              <Box>
                <Link href={'/'}>
                  <Logo
                    src={"/convertmasterLogo.png"}
                    alt={"Convert Master Logo"}
                    width={40}
                    height={40}
                  />
                </Link>
              </Box>
              <Box sx={{flexGrow: 1}} />
              <Box sx={{ display: { xs: "block", sm: "block", md: 'none'}}}>
                <IconButton sx={{ position: 'absolute', top: 10, right: 10}} onClick={handleMobileMenuClose}>
                  <Close />
                </IconButton>
              </Box>
              
              {AllMenusForMobile(data) }
            </Box>   
            </Drawer>
          )}
            </Toolbar>
          </AppBar>
          
        </Box>
     </>
    )
}
const AllMenus = (data) => {
  const theme = useTheme();
  const toggleTheme = useThemeToggle();
  
  return (
    <Box 
      sx={{
        display: { xs: 'none', sm: 'none', md:'flex'}, 
        flexDirection: 'row', 
        alignContent: "center", 
        alignItems: "center", 
      }}>

                {data.map((route, index)=> (
                  <NavItem
                    key={index}
                    href={route.href}
                    title={route.label}
                    active={route.active}
                  />
                ))}

                <IconButton 
                  onClick={toggleTheme}
                  title="theme-button-icons"
                >
                  { theme.palette.mode === 'light' ?<DarkModeRounded /> : <LightModeOutlined /> }
                </IconButton>
                {/* <IconButton
                    component="a"
                    href={"https://www.linkedin.com/company/highrise-construction-solutions/about/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={"https://www.linkedin.com/company/highrise-construction-solutions/about/"}
                    sx={{
                        margin: '0 10px',
                        color: theme.palette.mode === 'light' ? "#000": "#fff",// Change the color of the icons
                        '&:hover': {
                            color: '#1976d2', // Change color on hover
                        },
                        svg: {
                          fontSize: '3.5rem' // Custom font sizesx
                        }
                    }}
                >
                  <LinkedIn />
                </IconButton> */}
                <Button 
                  variant="contained"  
                  href="sandeepsm017@gmail.com"  
                  sx={{
                    bgcolor: "contained",
                    color: "#fff",
                  }}
                  size="medium"
                >
                  Contact Us
                </Button>
              </Box>
  )
}
const AllMenusForMobile = (data) => {
  const theme = useTheme();
  const toggleTheme = useThemeToggle();
  return (
    <Box sx={{display: { xs: 'flex', md:'none'}, flexDirection: 'column', alignContent: "flex-start", alignItems: "flex-start", padding: ".5rem"}}>
      
      {data.map((route, index)=> (
                  <NavItem
                    key={index}
                    href={route.href}
                    title={route.label}
                    active={route.active}
                  />
                ))}
                {/* <IconButton
                    component="a"
                    href={"https://www.linkedin.com/company/highrise-construction-solutions/about/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={"https://www.linkedin.com/company/highrise-construction-solutions/about/"}
                    sx={{
                        margin: '0 10px',
                        color: theme.palette.mode === 'light' ? "#000": "#fff",// Change the color of the icons
                        '&:hover': {
                            color: '#1976d2', // Change color on hover
                        },
                        svg: {
                          fontSize: '3.5rem' // Custom font size
                        }
                    }}
                >
                  <LinkedIn />
                </IconButton> */}
                <Button 
                  variant="contained" 
                  fullWidth 
                  href="sandeepsm017@gmail.com"  
                  sx={{
                    height: '60px',
                    bgcolor: 'contained',
                    color: "#fff",
                  }}
                  size="medium"
                >
                  Contact Us
                </Button>
              </Box>
  )
}
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